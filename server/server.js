//const ENV      = require ('dotenv');
const app        = require('express')();
const http       = require('http').Server(app);
const { postgraphile } = require('postgraphile');
const path       = require('path');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const PORT       = 8080;

const server = http.listen(PORT, () => console.log('App listening on ' + PORT));

const io = require('socket.io')(server);

const rootPath = path.join(__dirname, '..');
const buildPath = path.join(rootPath, 'client', 'build');
const devPath = path.join(rootPath, 'client', 'public', 'index.html');

let fileCache = null;
let dirCache = null;
let pathCache = null;

// app.use(postgraphile(process.env.DATABASE_URL || 'postgres:///codecast', {
//   'dynamicJson': true,
//   'watchPg': true,
//   'showErrorStack': 'json',
//   'exportJsonSchemaPath:': './db/',
//   'exportGqlSchemaPath:': './db/',
//   'bodySizeLimit': '50mb'
// }));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({limit: '50mb'}));

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

app.get('/api/filecontent', (req, res) => {
  let fileID = req.body;
  fileCache ? 
    res.status(200).json(JSON.stringify(fileCache[fileID])) : 
    res.status(204).send('File not found');
});

app.get('/api/scheduledStreams/', (req, res) => {
  const testStreams = {
    "asdass": {
      title: 'NodeNStuff',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdass',
      languageImage: 'image',
      isActive: false
    },
    "asdasx": {
      title: 'Javascript4U',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdasx',
      languageImage: 'image',
      isActive: false
    },
    "asdfad": {
      title: 'RubyNStuff',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdfad',
      languageImage: 'image',
      isActive: false
    }
  };

<<<<<<< HEAD
=======
  // const query = req.query.user_id || '*';
>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
  
  console.log('Get success');
  res.status(200).json(testStreams);
});

<<<<<<< HEAD
=======


>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
app.get('/api/activeStreams/', (req, res) => {
  const testActiveStreams = {
    "asdass": {
      title: 'NodeNStuff',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdass',
      languageImage: 'image',
      isActive: true
    },
    "asdfad": {
      title: 'RubyNStuff',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdfad',
      languageImage: 'image',
      isActive: true
    },
    "asdasv": {
      title: 'NodeNStuff',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdasv',
      languageImage: 'image',
      isActive: true
<<<<<<< HEAD
    },
    "asdfqa": {
      title: 'RubyNStuff',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdfqa',
      languageImage: 'image',
      isActive: true
    },
    "asdatf": {
      title: 'NodeNStuff',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdatf',
      languageImage: 'image',
      isActive: true
    },
    "asdfpl": {
      title: 'RubyNStuff',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdfpl',
      languageImage: 'image',
      isActive: true
    }
=======
    }
    
  
>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
  };

  console.log('Get success');
  res.status(200).json(testActiveStreams);
});

app.get('/api/archivedStreams/', (req, res) => {
  const testArchivedStreams = {
    "asdass": {
      title: 'NodeNStuff',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdass',
      languageImage: 'image',
      isActive: false,
      isArchived: true
    },
    "asdfad": {
      title: 'RubyNStuff',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdfad',
      languageImage: 'image',
      isActive: false,
      isArchived: true
    },
    "asdasv": {
      title: 'NodeNStuff',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdasv',
      languageImage: 'image',
      isActive: false,
      isArchived: true
<<<<<<< HEAD
    },
    "asdfqa": {
      title: 'RubyNStuff',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdfqa',
      languageImage: 'image',
      isActive: false,
      isArchived: true
    },
    "asdatf": {
      title: 'NodeNStuff',
      user: 'Spencer h-White',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdatf',
      languageImage: 'image',
      isActive: false,
      isArchived: false
    },
    "asdfpl": {
      title: 'RubyNStuff',
      user: 'Spencer Mc-Whhite',
      description: 'asdasdasasdasdasdasfsdfadsfasffasdsadsafsdfadsfsdsadasdsafasdfadsfsadsadasdsadsada',
      scheduledDate: 'Thusday, August 12 2017',
      youtubeURL: null,
      userID: 1,
      streamID: 'asdfpl',
      languageImage: 'image',
      isActive: false,
      isArchived: true
    }
  };

  
=======
    }
  };

>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
  console.log('Get success');
  res.status(200).json(testArchivedStreams);
});

<<<<<<< HEAD
=======

>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
//recieve file dir/content from electron
app.post('/api/electron', (req, res) => {

  try {
    fileCache = req.body.content;
    dirCache = req.body.directory;
    pathCache = req.body.filepaths;
    res.status(200).send('Post request success');
  }
  catch (e) {
    res.status(500).send('Post request failed');
    console.log('Post to server failed:', e);
    throw e;
  }

});

app.get('/*', (req, res) => {
  res.sendFile(devPath);
});

io.on('connection', (socket) => {

  const clients = [];
  console.log(`Socket ${socket.id} connected`);
  clients.push(socket.id);
  console.log(clients);

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

          //**TODO: TRIGGER PUSH TO DIR TREE ON FILE UPDATE**//
          console.log('server/file_change triggered', payload);
          newFileVersion = payload;

          //update the code viewer
          redux.emit('action', { type: 'FILE_UPDATE', payload: newFileVersion });
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



// setTimeout(() => {
//   console.log('directory update =================');
//   redux.emit('action', { type: 'DIRECTORY_UPDATE', payload: testDirectory });
// }, 40000);

// setTimeout(() => {
//   console.log('file update =================');
//   redux.emit('action', { type: 'FILE_UPDATE', payload: ActiveViewFile });
// }, 40000);