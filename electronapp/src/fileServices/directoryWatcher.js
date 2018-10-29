module.exports = function watch(dirName) {

  const chokidar = require('chokidar');
  const watcher = chokidar.watch('file, dir', {
    ignored: /(^|[\/\\])\../ + '**/node_modules/, **package-lock.json',
    persistent: true,
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
    ignorePermissionErrors: true
  });

  const log = console.log.bind(console);

  function watcherReady() {
    log('Watcher is lurking');
  }
  //bind console.log
  // Add event listeners.  
  // 'add', 'addDir' and 'change' events also receive stat() results as second
  // argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
  watcher.on('add', (path, stats) => {
    log(`File ${path} was added;\nStats: ${stats}`);

  }).on('addDir', (path, stats) => {
    log(`Directory ${path} added;\nStats: ${stats}`);

  }).on('change', (path, stats) => {
    log(`File ${path} changed;\nStats: ${stats}`);

  }).on('unlink', (path) => {
    log(`File ${path} removed;`);

  }).on('unlinkDir', (path) => {
    log(`Directory ${path} removed;`);

  }).on('error', (err) => {
    log(`Chokidar error: ${err}`);

  }).on('ready', watcherReady)
  .on('raw', (event, path, details) => {
    // all events register as raw; use for testing purposes 
    log('Raw event data:', event, path, details);
  });

  return watcher;
};