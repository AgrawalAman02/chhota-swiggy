
const cors_proxy = require('cors-anywhere');

module.exports = (req, res) => {
  cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  }).emit('request', req, res);
};