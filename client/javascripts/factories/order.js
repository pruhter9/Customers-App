customers_app.factory('OrderFactory', function ($http) {
	var factory = {};
	var orders = [];

	factory.index = function(callback) {
		$http.get('/orders').success(function(output) {
			console.log(output);
			orders = output;
			callback(orders);
		});
	}

	factory.create = function (info, callback) {
		$http.post('/orders', {order: info}).success(function(output) {
			console.log("order created");
			orders.push({customerName: output.customerName, product: output.product, quantity: output.quantity, date: output.date});
			callback(orders);
		});
	}

	return factory;
})