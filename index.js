var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// you need to serve the file
/*
  The browser is looking to the server for the stylesheet,
  not in the local directory. Imagine this was on digital ocean,
  how would the browser be able to access that?
*/
app.get('/stylesheet.css', function (req, res) {
  res.sendFile(__dirname + '/stylesheet.css');
});

app.use(function(req, res, next) {
  res.status(404).send('Error: 404');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('My site is listening at http://%s:%s', host, port);

});
