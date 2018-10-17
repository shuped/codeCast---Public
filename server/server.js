//const ENV = require ('dotenv');

import React from 'React';
import express from 'express';
import path from 'path';
import fs from 'fs';

import App from '../client/src/App';

const PORT = process.env.PATH || 8080;

const app = express();

// const clientPath = '../client/public/';

// app.use(express.static(clientPath));

// app.get('/*', (req, res) => {
//   const app = ReactDOM.renderToString(<App />);
//   const index = path.resolve(path.join(clientPath, 'index.html'));
//   fs.readFile(index, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('');
//     }
//   })

// });

app.listen(PORT, console.log('server listening on ' + PORT));