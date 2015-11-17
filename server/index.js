var express = require('express');

var app = express();
var path = require('path');
var http = require('http');



app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + /Views/index.html))
})

	
var server = app.listen(8080, function(){
	var port = server.address().port;
	
	console.log("Starting jeremybohannon.com on http://localhost:%s", port);
})