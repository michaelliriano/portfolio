const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy('/websocket', {
      target: 'http://michaelliriano.herokuapp.com',
      ws: true
    })
  );
};
