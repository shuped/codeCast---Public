const axios = require('axios');

module.exports = axios.create({
  timeout: 60000,
  baseURL: 'https://codecastserver.herokuapp.com',
  maxContentLength: ((5000 * 1000) * 1000)
});