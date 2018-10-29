chokidar.watch('.', {
  ignored: /node_modules|\.git/,
  persistent: true,
  // followSymlinks: false,
  // useFsEvents: false,
  // usePolling: false
}).on('all', async function(event, path) {
 const eventMethods = {
   'add': (filePath) => {
    
   },
   'addDir': (filePath) => {


   },
   'change': (filePath) => {
     console.log('change', filePath)
     readDir(__dirname, done(__dirname))
   },
   'unlink': (filePath) => {
     console.log('unlink', filePath)

   }
 }
 console.log('event, path:', event, path )
 // event specific behavior
 eventMethods[event] ? eventMethods[event](path) : console.log('Event missed:', event);

 // map directory entirely
})
 .on('ready', function() {
  console.log('Ready');
})
});
