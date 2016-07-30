var express = require('express');
var bootstrap = require('bootstrap')

// app setup
var app = express();
var port = 8080;

// setup the app middlware
app.use(express.static('./public'));

app.listen(port, function() {
	console.log('Server up and running on port: ', port);
});