const fs = require('fs');
// const stream = fs.createWriteStream('./testFile.js', {flags:'a'});
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const util = require('util');
const path = require('path');
const uuid = require('uuid/v1');

const rootDir = path.join(__dirname, '..');

//Create promise.each function that takes array and resolver function
Promise.each = async function(arr, fn) {
  //collect resolved promises
  let resolved = [];
  //check for valid array
  if (!Array.isArray(arr)) return Promise.reject('Must pass an array to .each');
  //for each promise, resolve and push result
  for (let promise of arr) await fn(promise)
  .then(async (result) => {
    await resolved.push(result);
  }).catch((err) => {
    throw err;
  })
  return await resolved;
  //return array for resolved promises
}

//function to resolve promises for Promise.each()
function resolver(promise) {
  return Promise.resolve(promise);
}

//makes filepath from __dirname relative
function makeRelative(fpath, root) {
  //split root and filepath to compare
  let pathArr = fpath.split('/');
  let rootArr = root.split('/');

  //compare path and root nodes
  let relative = pathArr.filter((node, i) => {
    return node !== rootArr[i];
  });
  //return relative path as string
  return relative.join('/');
}

//returns new promise with Buffer object for async file read
function readFile(target) {
  return new Promise((resolve, reject) => {
    fs.readFile(target, function(err, content) {
      if (err) reject(err);
      resolve(content);
    });
  });
}

//reads file and stores id and result in fileStore object as key: value pair
async function fileReader(root, fpath, target) {
  //concat fpath array and join to root to make absolute
  let filePath = fpath.join('/');
  let readTarget = path.join(root, filePath, target);

  //return new promise with decoded file
  return readFile(readTarget).then(async (result) => {
    return await decoder.write(result);
  }).catch((err) => {
    throw err;
  });
}

async function makeJSON(array) {
  //generates JSON object representing directory structure from array
  let promises = [];
  let fileIDs = [];

  let dirObj = {};
  let fileObj = {};

  for (let file of array) {
    //set variable for object traversal
    let current = dirObj;
    //split filepath and assign filename to variable
    let fpath = file.split('/');
    let targetFile = fpath.pop();
    //list of files and extensions to ignore
    const ignore = ['.ico', '.png', '.jpg', '.DS_Store', '.svg', 'node_modules', 'package-lock.json', '.git', '.scssc'];
    const check = new RegExp(ignore.join('|')).test(targetFile);

    //check for valid file extensions
    if (!check) {
      //check to see if files are in subdirectory
      if (fpath.length > 0) {
        //for each node assign child and move one level deeper
        fpath.forEach(async (node, i) => {
          console.log('Current:', current[node]);
          current[node] ? current[node][fpath[i + i]] : current[node] = {};
          current = current[node];
          console.log('Next:', current[node]);
          //if last node: 
          //1) assign file and hash, and 
          //2) read file and push returned promise to promises array
          if(i === fpath.length - 1) {
            let fileID = uuid();
            await promises.push(fileReader(rootDir, fpath, targetFile));
            await fileIDs.push(fileID);
            current[targetFile] = fileID;
          }
        });
      //if child of root dir append to root object and do same as above
      } else {
        let fileID = uuid();
        await promises.push(fileReader(rootDir, fpath, targetFile));
        await fileIDs.push(fileID);
        current[targetFile] = fileID;
        
      }
    }
    console.log(util.inspect(dirObj, false, null));
  }
  //resolve all promises in array 
  let resolved = await Promise.each(await promises, resolver);
  
  resolved.forEach((res, i) => {
    fileObj[fileIDs[i]] = res;
  });
  fs.writeFile('./content.json', JSON.stringify(fileObj), (err) => {
    if (err) throw err;
  });
  fs.writeFile('./directory.json', JSON.stringify(dirObj), (err) => {
    if (err) throw err;
  });
  //return directory tree as a promise
  return dirObj;
}

//when readDir is complete, call function to build directory and file content objects
function done() {
  return (err, res) => {
    if (err) throw err;
    makeJSON(res);
  }
}

//takes directory path and callback
const readDir = (dir, done) => {
  // collects results
  let results = [];
  // reads directory passed to readDir()
  fs.readdir(dir, function(err, items) {
    //returns error if err
    if (err) return done(err);
    //init index counter for current dir
    let i = 0;
    //magical recursive IIFE
    return (function next() {
      let item = items[i++];
      // console.log('Item:', item);
      //return when dir is walked
      if (!item) return done(null, results);
      //add to filepath
      item = path.join(dir, item);
      //stat returns quantifiable properties of item, used here to parse files vs. dirs
      return fs.stat(item, (err, stat) => {
        if (stat && stat.isDirectory()) {
          if (item && !item.includes('node_modules') && !item.includes('.git')) {
            //if dir call self recursively for each subdir
            return readDir(item, function(err, res) {
              results = [...results, ...res];
              return next();
            });
          } else {
            //if node_modules or .git trigger recursion
            return next();
          }
        } else {
          //if files push to results
          results.push(makeRelative(item, rootDir));
          return next();
        }
      });
    })();
  });
};

readDir(rootDir, done());