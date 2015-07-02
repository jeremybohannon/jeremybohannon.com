var express = require('express');
var app     = express();
var path    = require("path");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/contact/', function (req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/stylesheet.css', function(req, res) {
  res.sendFile(__dirname + '/stylesheet.css');
});

app.get('/contactForm.css', function(req, res) {
  res.sendFile(__dirname + '/contactForm.css');
});

app.use(function(req, res, next) {
  res.status(404).send('Error: 404');
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('My site is listening at http://%s:%s', host, port);

});
