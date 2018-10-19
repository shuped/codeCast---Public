//const ENV = require ('dotenv');
const express = require('express');
const http = require('http');
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

io.on('connection', (socket) => {
  console.log(`Socket for ${socket.id} connected`);

  socket.on('disconnet', () => {
    console.log('Socket disconnected')
  });
});