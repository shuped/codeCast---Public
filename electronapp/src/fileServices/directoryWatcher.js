const chokidar = require('chokidar');
 const fs = require('fs');
 const https = require('https');
 const fsMapper = require('./fs-mapper.js');
 const path = require('path');

 module.exports = () => chokidar.watch('.', {
   ignored: /node_modules|\.git/,
   persistent: true,
   // followSymlinks: false,
   // useFsEvents: false,
   // usePolling: false
 }).on('all', function(event, path) {
   const eventMethods = {
     'add': (fsEvent, filePath) => {
       console.log('add', filePath)
      
 	  },
     'addDir': (fsEvent, filePath) => {
       console.log('addDir',filePath)


     },
     'change': (fsEvent, filePath) => {
       console.log('change', filePath)

     },
     'unlink': (fsEvent, filePath) => {
       console.log('unlink', filePath)

     }
   };
   console.log('event, path:', event, path)
   // event specific behavior
    eventMethods[event] ? eventMethods[event](path) : console.log('Event missed:', event);

    // map directory entirely

 })
  .on('ready', function() {
   console.log('Ready');
 })