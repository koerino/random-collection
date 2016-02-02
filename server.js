'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var app = express();

//environment configuration
app.set('port', process.env.PORT || 3000);
app.use(favicon(__dirname + '/public/assets/favicon.ico'));
//set static file directory
app.use(express.static('public'));

var port = app.get('port');
app.listen(port, function() {
    console.log('Server listening on localhost: ' + port);
});