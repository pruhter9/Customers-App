// This file needs to be required in the server.js file
// add required controller files
var customers = require("../server/controllers/customers.js");
var orders = require("../server/controllers/orders.js")
module.exports = function(app) {
	// verb: get, plural of target as the URI is the RESTful index method
	// customers
	app.get('/customers', function (req,res) {
		customers.index(req,res);
	});
	app.post('/customers', function (req,res) {
		customers.create(req,res);
	});
	// orders
	app.get('/orders', function (req,res) {
		orders.index(req,res);
	});
	app.post('/orders', function (req,res) {
		orders.create(req,res);
	});
}