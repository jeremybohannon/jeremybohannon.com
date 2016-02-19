var express = require('express');

var app = express();
var path = require("path");
var http = require('http');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '../../client/build/index.html'));
});

app.get('/resume.pdf', function(req, res){
	res.sendFile(path.join(__dirname + '../../client/resources/resume.pdf'));
});

app.get('/playground', function(req, res){
	res.sendFile(path.join(__dirname + '../../client/build/playground.html'));
});

app.use('/client',        express.static(path.join(__dirname + '../../client')));

app.use('/build',         express.static(path.join(__dirname + '../../client/build')));

app.use('/styles',        express.static(path.join(__dirname + '../../client/styles')));

app.use('/resources',     express.static(path.join(__dirname + '../../client/resources')));

app.use('/kristinhorton', express.static(path.join(__dirname + '../../kristinhorton.com')));

app.use('/sampulator',    express.static(path.join(__dirname + '../../sampulator')));

app.use(function (req, res, next) {
	res.status(404).send('Error: 404');
});

var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('My site is listening at http://%s:%s', host, port);

});
