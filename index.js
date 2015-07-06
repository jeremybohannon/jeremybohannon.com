var express = require('express');
var app     = express();
var path    = require("path");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/contact/', function (req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/styles/stylesheet.css', function(req, res) {
  res.sendFile(__dirname + '/styles/stylesheet.css');
});

app.get('/styles/contactForm.css', function(req, res) {
  res.sendFile(__dirname + '/styles/contactForm.css');
});

app.get('/favicon/tempIcon.ico', function(req, res) {
  res.sendFile(__dirname + '/favicon/tempIcon.ico');
});

app.use(function(req, res, next) {
  res.status(404).send('Error: 404');
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('My site is listening at http://%s:%s', host, port);

});
