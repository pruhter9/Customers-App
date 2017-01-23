// Note the immediate function and the object that is returned
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() {
	return {
		index: function(req,res) {
			Customer.find({}, function(err,results) {
				if(err) {
					console.log(err);
				} else {
					console.log(results);
					console.log('hello');
					res.json(results);
				}
			});
		},
		create: function(req,res) {
			console.log(req.body);
			Customer.create({name: req.body.customer}, function(err,data) {
				if(err) {
					console.log(err);
				} else {
					console.log('Created new customer');
					res.json(data);
				}
			});
		}
	};
})();