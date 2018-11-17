const chokidar = require('chokidar');
 const fs = require('fs');
 const https = require('https');
 const { readDir, done } = require('./fs-mapper.js');
 const path = require('path');

 module.exports = (dirToWatch, streamID) => 	chokidar.watch(dirToWatch, {
  ignored: /node_modules|\.git/,
  persistent: true,
  ignoreInitial: true
  // followSymlinks: false,
  // useFsEvents: false,
  // usePolling: false
}).on('all', function(event, pathArg) {
  const eventMethods = {
  // TODO: SEND ONLY CHANGES IN FUTURE
  'add': (filePath) => {
    console.log('add', filePath);
    readDir(dirToWatch, done(dirToWatch, streamID));
    
  },
  'addDir': (filePath) => {
    console.log('addDir', filePath);
    readDir(dirToWatch, done(dirToWatch, streamID));

  },
  'change': (filePath) => {
    console.log('change', filePath);
    readDir(dirToWatch, done(dirToWatch, streamID));

  },
  'unlink': (filePath) => {
    console.log('unlink', filePath);
    readDir(dirToWatch, done(dirToWatch, streamID));
  }
};
  console.log('event, path:', event, pathArg);  
  // event specific behavior;s
  eventMethods[event] ? eventMethods[event](pathArg) : console.log('Event missed:', event);
}).on('ready', async function() {
  console.log('Ready');
  readDir(dirToWatch, done(dirToWatch, streamID));
//  TODO: Move the axios to here instead of fs-mapper
});