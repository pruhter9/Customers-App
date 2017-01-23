customers_app.controller('CustomersController', function ($scope, CustomerFactory) {
	var my = this;
	my.customers = [];

	console.log("Here");

	CustomerFactory.index(function(data) {
		my.customers = data;
		console.log(data);
	});

	my.addcustomer = function() {
		CustomerFactory.create(my.newCustomer, function(data) {
			my.customers = data;
		})
		my.new_customer = {};
	};

	my.removeCustomer = function(customer) {
		console.log("removing Customer");
	}
});