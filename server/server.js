//const ENV = require ('dotenv');
const app       = require('express')();
const http      = require('http').Server(app);
const path      = require('path');
const fs        = require('fs');
const morgan    = require('morgan');

const PORT      = 8080;

const server    = http.listen(PORT, () => console.log('App listening on ' + PORT));

const io        = require('socket.io')(server);

const rootPath  = path.join(__dirname, '..');
const buildPath = path.join(rootPath, 'client/build');

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

app.get('/*', (req, res) => {
  res.statusCode(200).json({ express: 'successful connection to express' })
});

io.on('connection', (socket) => {
  
  const clients = [];
  console.log(`Socket ${socket.id} connected`);
  clients.push(socket.id);
  console.log(clients);
  
  socket.on('action', (action) => {

    const actions = {
      'server/new_connection': (payload) => {
        console.log('Server message:', payload);
      }
    }

    function defaultAction(type, payload) {
      console.log("Default action triggered");
      socket.broadcast.emit(type, payload);
    }

    console.log('Action received:', action);
    const { type, payload } = action;
    actions[type] ? actions[type](payload) : defaultAction(type, payload);

  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`)
    let clientIndex = clients.findIndex(e => e === socket.id);
    clients.splice(clientIndex, 1);
    console.log(clients);
  });

  socket.on('error', (err) => {
    console.log(err, `from ${socket.id}`);
  });
});

const chat = io
  .of('/chat')
  .on('connection', (socket) => {
    
    const clients = [];
    console.log(`Socket ${socket.id} connected`);
    clients.push(socket.id);
    console.log(clients);
    
    chat.on('action', (action) => {
      
      const actions = {
        'server/message': (payload) => {
          console.log('server/message action triggered', payload);
          chat.emit('message', payload);
        },
      }
    });
});

const terminal = io
  .of('/terminal')
  .on('connection', (socket) => {
    const termClients = [];
    console.log(`Terminal Socket ${socket.id} connected`);
    termClients.push(socket.id);
    console.log(termClients);
    
    socket.on('data', (data) => {
      console.log('terminal data:', data)
      terminal.emit('terminal', data)
    });
  });
  
