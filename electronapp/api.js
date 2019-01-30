const axios = require('axios');

module.exports = axios.create({
  timeout: 60000,
  baseURL: 'http://codecastserver-prod.us-west-2.elasticbeanstalk.com/',
  maxContentLength: ((5000 * 1000) * 1000)
});