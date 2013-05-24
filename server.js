
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , routes = require('./lib/server/routes')
  , path = require('path')
  , gzip = require('connect-gzip')
  , mongoose = require('mongoose')
  , shoe = require('shoe')
  , redis = require('redis')
  , shoes = require('./lib/server/shoes')(shoe)

var client  = redis.createClient();

client.on('connect', function() {
  console.log('Redis Ready :)')
})

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(__dirname));
app.use(gzip.gzip());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes(app, client)

server = server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

shoes.message.install(server, '/message');
shoes.move.install(server, '/move');

