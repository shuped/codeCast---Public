const chokidar = require('chokidar');
const fs = require('fs');
const https = require('https');
const fsMapper = require('../../../server/fs-mapper.js');
const path = require('path');

const URL = 'http://localhost:8080';

module.exports = () => chokidar.watch('.', {
  ignored: /node_modules|\.git/,
  persistent: true,
  // followSymlinks: false,
  // useFsEvents: false,
  // usePolling: false
}).on('all', function(event, path) {
  const eventMethods = {
    'add': (fsEvent, filePath) => {
      console.log('add')

	  },
    'addDir': (fsEvent, filePath) => {
      console.log('addDir')


    },
    'change': (fsEvent, filePath) => {
      console.log('add3')

    },
    'unlink': (fsEvent, filePath) => {
      console.log('add4')

    }
  };
  console.log('event, path:', event, path)
  if (fs.existsSync('./directory.json') && fs.existsSync('./content.json')) {
    eventMethods[event] ? eventMethods[event](path) : console.log('Event missed:', event);
  } else {
    // map directory
  }
}).on('ready', function() {
  console.log('Ready');
})

//   const watcher = chokidar.watch('file, dir', {
//     ignored: /(^|[\/\\])\../,
//     persistent: true
//   });

//   // Add event listeners.
//   const log = console.log.bind(console)
//   watcher
//     .on('ready', () => log('Initial scan complete. Ready for changes'))
//     .on('add', path => log(`File ${path} has been added`))
//     .on('addDir', path => log(`Directory ${path} has been added`))
//     .on('change', path => console.log((`File ${path} has been changed`)))
//     .on('unlink', path => log(`File ${path} has been removed`))
//     .on('unlinkDir', path => log(`Directory ${path} has been removed`))
//     .on('error', error => log(`Watcher error: ${error}`))

//   // all events are only registering as raw
//   //testing purposes 
//     watcher
//     .on('raw', (event, path, details) => {
//       console.log('!Raw event info!:', event, path, details);
//     });
//   // 'add', 'addDir' and 'change' events also receive stat() results as second
//   // argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
//   watcher.on('change', (path, stats) => {
//     if (stats) console.log(`File ${path} changed size to ${stats.size}`);
//   });

//   chokidar.watch('file', {
//     persistent: true,

//     ignored: '**/node_modules/, **package-lock.json',
//     ignoreInitial: false,
//     followSymlinks: false,
//     cwd: dirName,
//     disableGlobbing: false,

//     usePolling: true,
//     interval: 100,
//     binaryInterval: 300,
//     alwaysStat: false,
//     depth: 99,
//     awaitWriteFinish: {
//       stabilityThreshold: 2000,
//       pollInterval: 100
//     },

//     ignorePermissionErrors: true,
//   });

//   return watcher
// }