var express = require('express');
var path = require("path");
//var favicon = require('serve-favicon');

var routes = require('./routes/index');
var css = require('./routes/css');

var app = express();

//app.use(favicon(__dirname + '/favicon/tempIcon.ico'));


// Set up middleware paths
app.use('/', routes);
app.use('/css', css);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(function(req, res, next) {
  res.status(404).send('Error: 404');
});

var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('My site is listening at http://%s:%s', host, port);

});


