// const ENV              = require ('dotenv');
const app              = require('express')();
const http             = require('http').Server(app);
const { postgraphile } = require('postgraphile');
const path             = require('path');
const morgan           = require('morgan');
const bodyParser       = require('body-parser');
const PORT             = 8080;

const server           = http.listen(PORT, () => console.log('App listening on ' + PORT));

const io               = require('socket.io')(server);

const testData         = require('./testData.js');

const rootPath         = path.join(__dirname, '..');
const buildPath        = path.join(rootPath, 'client', 'build');
const devPath          = path.join(rootPath, 'client', 'public', 'index.html');

let fileCache          = null;
let dirCache           = null;
let pathCache          = null;

// app.use(postgraphile(process.env.DATABASE_URL || 'postgres:///codecast', {
//   'dynamicJson': true,
//   'watchPg': true,
//   'showErrorStack': 'json',
//   'exportJsonSchemaPath:': './db/',
//   'exportGqlSchemaPath:': './db/',
//   'bodySizeLimit': '50mb'
// }));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

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

  const clients = [];
  console.log(`Socket ${socket.id} connected`);
  clients.push(socket.id);
  console.log(clients);
  io.of('/redux').emit({ type: 'DIRECTORY_UPDATE', payload: dirCache })

  socket.on('action', (action) => {

    const actions = {
      'server/new_connection': (type, payload) => {
        console.log('Server message:', payload);
      }
    }

    function defaultAction(type, payload) {
      console.log("Default action triggered");
      socket.broadcast.emit(type, payload);
    }

    console.log('Action received:', action);
    const { type, payload } = action;
    actions[type] ? actions[type](type, payload) : defaultAction(type, payload);

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

const redux = io
  .of('/redux')
  .on('connection', (socket) => {

    const clients = [];
    console.log(`Redux ${socket.id} connected`);
    clients.push(socket.id);
    console.log(clients);
   
    socket.on('action', (action) => {      

      const actions = {
        'server/message': (type, payload) => {
          console.log('server/message action triggered', payload);
          redux.emit('action', { type: 'NEW_MESSAGE', payload });
        },
        'server/directory_update': (type, payload) => {
          console.log('server/dir_update triggered', payload);
          redux.emit('action', { type: 'DIRECTORY_UPDATE', payload });
        },
        'server/file_change': (type, payload) => {
          let file = fileCache[payload.fileID]
          redux.emit('action', { type: 'FILE_UPDATE', payload: file });
        }
        
      };
      function defaultReduxAction(type, payload) {
        console.log("Default redux action triggered");
        return null
      }
      const { type, payload } = action;
      actions[type] ? actions[type](type, payload) : defaultReduxAction(type, payload);

      socket.on('disconnect', () => {
        console.log(`Redux ${socket.id} disconnected`)
        let clientIndex = clients.findIndex(e => e === socket.id);
        clients.splice(clientIndex, 1);
        console.log(clients);
      });

      socket.on('error', (err) => {
        console.log(err, `from redux: ${socket.id}`);
      });
    });
  });

const terminalRecord = {};
const terminal = io
.of('/terminal')
.on('connection', (socket) => {
  const termClients = [];
  console.log(`Terminal Socket ${socket.id} connected`);
  termClients.push(socket.id);
  console.log(termClients);

  socket.on('data', (data) => {
    let now = Date.now();
    terminalRecord[now] = data;
    terminal.emit('terminal', terminalRecord[now]); // refactor to action when we store data
  });
  


  socket.on('disconnect', () => {
    console.log(`Terminal socket ${socket.id} disconnected`)
    let clientIndex = termClients.findIndex(e => e === socket.id);
    termClients.splice(clientIndex, 1);
    console.log(termClients);
  });
});
  
app.get('/api/filecontent/:file_uuid', (req, res) => {
  const uuid = req.params.file_uuid;
  console.log(
    'fileCache not null:', fileCache !== null, 
    'dirCache not null:', dirCache !== null,
    'fileCache[param] typeof:', fileCache && typeof fileCache[uuid]
  );  
  try {
    fileCache[uuid] ? res.status(200).json(fileCache[uuid]) : res.send('File not found') 
  }
  catch (e) {
    res.status(404).send('No files cached');
    throw e;
  }
});

app.get('/api/scheduledStreams/', (req, res) => {
  console.log('Get /scheduledStreams success');
  res.status(200).json(testData);
});

app.get('/api/activeStreams/', (req, res) => {
  const testActiveStreams = {};
  for (let streamID in testData) {
    if (testData[streamID].isActive === true) {
      testActiveStreams[streamID] = testData[streamID];
    }
  }
  console.log('Get success');
  res.status(200).json(testActiveStreams);
});

app.get('/api/archivedStreams/', (req, res) => {

  console.log('Get /archivedStreams success');
  res.status(200).json(testData);
});

app.get('/*', (req, res) => {
  res.status(200).json({ express: 'successful connection to express, /*', fileKeys: Object.keys(fileCache), dirCache });
});



//recieve file dir/content from electron
app.post('/api/electron/file_update', (req, res) => {
  let { file } = req.body;

  try {
    // redux.emit('action', { type: 'DIRECTORY_UPDATE', payload: dirCache });
    res.status(200).send('Post request success /api/electron/file_update');
  }
  catch (e) {
    console.log('Post to server failed /api/electron/file_update');
    res.status(500).send('Post request failed');
    throw e;
  }
  
});

app.post('/api/electron', (req, res) => {

  try {
    fileCache = req.body.content || fileCache;
    dirCache = req.body.directory || dirCache;
    pathCache = req.body.filepaths || pathCache;
    redux.emit('action', { type: 'DIRECTORY_UPDATE', payload: dirCache });
    res.status(200).json({ message: 'Post request success /api/electron', data: testData });
  }
  catch (e) {
    console.log('Post to server failed:', e);
    res.status(500).send('Post request failed /api/electron');
    throw e;
  }
  
});
