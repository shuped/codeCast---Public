//const ENV = require ('dotenv');
const express = require('express');
const path = require('path');
const fs = require('fs');
const socket = require('socket.io');
const morgan = require('morgan');

const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
  console.log('App listening on ' + PORT)
})
const io = socket(server);

app.use(morgan('dev', {
  skip: (req, res) => {
      return res.statusCode < 400;
  }, stream: process.stderr
}));
app.use(morgan('dev', {
  skip: (req, res) => {
      return res.statusCode >= 400;
  }, stream: process.stdout
}));

//actions[type](args);

const actions = {
  'server/message': () => {

  }
}

io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.on('message', (data) => {
    socket.emit(console.log('Message:', data));
  });

  socket.on('action', (action) => {
    const { type, payload } = action;
    
    const broadcast__action = action[type] ? action[type](payload) : { type: type, payload: payload };
    console.log('Got payload:', payload);
    socket.emit('action', broadcast__action);

  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`)
  });

  socket.on('error', (err) => {
    console.log(err, `from ${socket.id}`);
  });
});