const fs = require('fs');
const util = require('util');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function makeRelative(path, root) {
  let pathArr = path.split('/');
  let rootArr = root.split('/');
  let relative = pathArr.filter((node, i) => {
    return node !== rootArr[i];
  });
  return relative.join('/');
}


function makeJSON(array) {
  let result = {};
  
  for (let file of array) {
    // console.log(array);
    let current = result;
    let path = file.split('/');
    let targetFile = path.pop();
    if (path.length > 0) {
      path.forEach((node, i) => {
        current[node] = {...current[node]};
        current = current[node];
        if(i === path.length - 1) {
          current[targetFile] = 'fileHash';
        }
      });
    } else {
      current[targetFile] = "fileHash";
    }
  }
  console.log('Result:', util.inspect(result, false, null, true));
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
          if (item && !item.includes('node_modules') && !item.includes('.')) {
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

// function makeSubJSON(parent, pathArr) {
//   let subdir = {};
//   console.log('Parent:', parent, '; pathArr:', pathArr);
//   [ next, ...rest ] = pathArr;
//   console.log('PathArr:', pathArr, '; Next:', next);
//   if (pathArr.length > 1) {
//     for (let dir of pathArr) {
//       console.log(dir);
//       subdir[parent] = next ? subdir[parent][next] = makeSubJson(rest[0], rest.slice(1)) : subdir[parent] = makeSubJSON(next, rest);
//     }
//   } else {
//     subdir[parent] = next;
//   }
//   console.log('Subdir:', subdir);
//   return subdir;
// }
// if (path.length < 2) {
//   result = {...result, file};
// } else if (!result.hasOwnProperty(path[0])) {
//   let rest = path.slice(1);
//   result = {...result, [path[0]]: makeSubJSON(path[0], rest)}
// } else if (result.hasOwnProperty(path[0])) {
//   result[path[0]] = {...result[path[0]], [path[0]]: makeSubJSON(path[0], rest)}
// }
// let target = result;
//     if (path.length > 1) {
//       console.log('Path:', path);
//       path.forEach((dir, i) => {
//         console.log('Index:', i, path.length);
//         if (i < path.length - 1) {
//           console.log('Target:', target, '; Dir:', dir);
//           target[dir] ? target[dir] = {[path[i+1]]: {}} : target[dir] = {[path[i + 1]]: {}};
//           target = target[dir]
//         } else {
//           console.log('End target:', target);
//           target = {[dir]: 'fileHash'};
//           console.log(target);
//         }
//       });
//     } else {
//       target[file] = 'fileHash';
//     }