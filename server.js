// Require necessary modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// Create the express app
var app = express();
app.use(bodyParser.json());

// Set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8001, function() {
	console.log('App running on port 8001');
});