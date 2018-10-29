const axios = require('axios');

module.exports = axios.create({
<<<<<<< HEAD:electronapp/api.js
  timeout: 60000,
  maxContentLength: ((5000 * 1000) * 1000),
  baseURL: 'http://localhost:8080'
=======
  timeout: 60000
>>>>>>> ddf2c7662eccce9d98df2b645640ab401f26f931:electron-app/src/redux/ducks/api.js
});