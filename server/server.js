//const ENV = require ('dotenv');
const express = require('express');
const path = require('path');
const fs = require('fs');
const io = require('socket.io')();
const morgan = require('morgan');

const PORT = 8080;

const app = express();

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

app.get('/', (req, res) => {
  res.send('App listening');
})

io.on('connection', (client) => {

});


io.listen(app.listen(PORT), console.log('App listening on ' + PORT));