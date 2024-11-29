const CorsAnywhere = require('cors-anywhere');

// Initialize the server once
const server = CorsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
  // Additional configurations if necessary
});

module.exports = (req, res) => {
  server.emit('request', req, res);
};