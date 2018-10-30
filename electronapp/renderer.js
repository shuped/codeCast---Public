const os = require('os');
const pty = require('node-pty');
const Terminal = require('xterm').Terminal;
const socket = require('socket.io-client');

const io = socket.connect('http://localhost:8080/terminal');

// Initialize node-pty with an appropriate shell
const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
const ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.cwd(),
  env: process.env
});

// Initialize xterm.js and attach it to the DOM
const xterm1 = new Terminal({ scrollback: 9999999 });

xterm1.open(document.getElementById('xterm1'));

// Setup communication between xterm.js and node-pty
xterm1.on('data', (data) => {
  ptyProcess.write(data);
});

ptyProcess.on('data', function (data) {
  xterm1.write(data);
  terminalIO.emit('data', data)
});

chokidar.watch('.', {
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