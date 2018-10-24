const fs = require('fs');
const util = require('util');
const path = require('path');
const uuid = require('uuid/v1');

const rootDir = path.join(__dirname, '..');

function makeRelative(fpath, root) {
  let pathArr = fpath.split('/');
  let rootArr = root.split('/');
  let relative = pathArr.filter((node, i) => {
    return node !== rootArr[i];
  });
  return relative.join('/');
}

let fileStore = {};
let fileDir;

//returns new promise for async file read
function readFile(target) {
  return new Promise((resolve, reject) => {
    fs.readFile(target, 'utf8', function(err, content) {
      if (err) reject(err);
      resolve(content);
    });
  });
}


//reads file and stores id and result in fileStore object as key: value pair
function fileReader(root, fpath, target, id) {
  
  let filePath = fpath.join('/');
    let readTarget = path.join(root, filePath, target);
    readFile(readTarget).then((result) => {
      return fileStore[id] = result;
    }).catch((err) => {
      throw err;
    }).then(() => {
      fs.writeFile('./testFile.js', JSON.stringify(fileStore, null, 2), (err) => {
        if (err) throw err;
        // console.log(id + ":", target);
      })
    }).catch((err) => {
      throw err
    });

}

function makeJSON(array) {
  //generates JSON object representing directory structure from array

  let result = {};
  
  for (let file of array) {
    let current = result;
    let fpath = file.split('/');
    let targetFile = fpath.pop();
    console.log(file);
    const ignore = ['.ico', '.png', '.jpg', '.DS_Store', '.svg', 'node_modules', 'package-lock.json'];
    const check = new RegExp(ignore.join('|')).test(targetFile);

    if (!check) {
      if (fpath.length > 0) {
        fpath.forEach((node, i) => {
          current[node] = {...current[node]};
          current = current[node];
          if(i === fpath.length - 1) {
            let fileID = uuid();
            fileReader(rootDir, fpath, targetFile, fileID);
            current[targetFile] = fileID;
          }
        });
      } else {
        let fileID = uuid();
        fileReader(rootDir, fpath, targetFile, fileID);
        current[targetFile] = fileID;
      }
    }
  }
  
}

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
      if (!item || !items && results) return done(null, results);
      //add to filepath
      item = path.join(dir, item);
      //stat returns quantifiable properties of item, used here to parse files vs. dirs
        // console.log('defined:', item);
      return fs.stat(item, (err, stat) => {
        if (stat && stat.isDirectory()) {
          if (item && !item.includes('node_modules')) {
            //if dir call self recursively for each subdir
            return readDir(item, function(err, res) {
              results = [...results, ...res];
              return next(results);
            });
          } else {
            //if node_modules or dotfile trigger recursive 
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
