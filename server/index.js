var express = require('express');

var app = express();
var path = require("path");
var http = require('http');



app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '../../client/build/index.html'));
});

app.get('/client/styles/stylesheet.css', function(req, res){
	res.sendFile(path.join(__dirname + '../../client/styles/stylesheet.css'));
});

app.get('/kristinhorton', function(req, res){
	res.sendFile(path.join(__dirname + '../../kristinhorton.com/index.html'));
});

app.get('/resume.pdf', function(req, res){
	res.sendFile(path.join(__dirname + '../../client/resources/resume.pdf'));
});

app.get('/kristinhorton/resume.pdf', function(req, res){
	res.sendFile(path.join(__dirname + '../../kristinhorton.com/resume.pdf'));
});



app.get('/flowers.jpg', function(req, res){
	res.sendFile(path.join(__dirname + '../../client/resources/image_01.jpg'));
});

app.use(function (req, res, next) {
	res.status(404).send('Error: 404');
});

var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('My site is listening at http://%s:%s', host, port);

});
