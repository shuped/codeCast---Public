const os = require('os');
const pty = require('node-pty');
const Terminal = require('xterm').Terminal;
const socket = require('socket.io-client');
const fs = require('fs');
const path = require('path');

var io = socket.connect('http://localhost:8080/terminal');

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
const xterm1 = new Terminal({scrollback: 9999999});

xterm1.open(document.getElementById('xterm1'));


// Setup communication between xterm.js and node-pty
xterm1.on('data', (data) => {
  ptyProcess.write(data);
});


ptyProcess.on('data', function (data) {
  xterm1.write(data);
<<<<<<< HEAD
  io.emit('data', data)
=======
  
  io.emit('data', data);
>>>>>>> 39414e6215c052ded3fa3858d0764884b00ae7de
});
