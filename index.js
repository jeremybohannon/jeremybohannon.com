var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(function(req, res, next) {
  res.status(404).send('Error: 404');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('My site is listening at http://%s:%s', host, port);

});
