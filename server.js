'use strict';

//load modules
var express = require('express');
var http = require('http');
var routes = require('routes')
var favicon = require('serve-favicon');
var errorHandler = require('errorhandler');

//initialize server
var app = express();
var server = http.createServer(app);

//environment configuration
app.set('port', process.env.PORT || 3000);
app.use(favicon(__dirname + '/public/favicon.icns'));
//set static file directory
app.use('/public', express.static(__dirname + '/public'));

//errorhanlder in development mode
if('development' = app.get('env')) {
    app.use(errorHandler());
}

port = app.get('port');
server.listen(port, function() {
    console.log('Server listening on localhost: ' + port);
});