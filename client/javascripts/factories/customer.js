customers_app.factory('CustomerFactory', function ($http) {
	var factory = {};
	var customers = [];

	factory.index = function(callback) {
		$http.get('/customers').success(function(output) {
			console.log(output);
			customers = output;
			callback(customers);
		});
	}

	factory.create = function (info, callback) {
		$http.post('/customers', {customer: info}).success(function(output) {
			console.log(output);
			customers.push({name: output.name, date: output.date});
			callback(customers);
		});
	}

	return factory;
})