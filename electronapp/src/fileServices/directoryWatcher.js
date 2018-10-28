const chokidar = require('chokidar')

module.exports = function (dirName) {
  const watcher = chokidar.watch('file, dir', {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });

  // Add event listeners.
  const log = console.log.bind(console)
  watcher
    .on('ready', () => log('Initial scan complete. Ready for changes'))
    .on('add', path => log(`File ${path} has been added`))
    .on('addDir', path => log(`Directory ${path} has been added`))
    .on('change', path => console.log((`File ${path} has been changed`)))
    .on('unlink', path => log(`File ${path} has been removed`))
    .on('unlinkDir', path => log(`Directory ${path} has been removed`))
    .on('error', error => log(`Watcher error: ${error}`))

  // all events are only registering as raw
  //testing purposes 
    watcher
    .on('raw', (event, path, details) => {
      console.log('!Raw event info!:', event, path, details);
    });
  // 'add', 'addDir' and 'change' events also receive stat() results as second
  // argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
  watcher.on('change', (path, stats) => {
    if (stats) console.log(`File ${path} changed size to ${stats.size}`);
  });

  chokidar.watch('file', {
    persistent: true,

    ignored: '**/node_modules/, **package-lock.json',
    ignoreInitial: false,
    followSymlinks: false,
    cwd: dirName,
    disableGlobbing: false,

    usePolling: true,
    interval: 100,
    binaryInterval: 300,
    alwaysStat: false,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    },

    ignorePermissionErrors: true,
  });

  return watcher
}