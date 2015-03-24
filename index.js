var hapi = require('hapi');
var good = require('good');
var path = require('path');

var server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
});

server.views({
  engines: {
    html: require('handlebars')
  }
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public',
      listing: false,
      index: true
    }
  }
});

server.register({
  register: good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args: [{
        log: '*',
        response: '*'
      }]
    }]
  }
}, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});

