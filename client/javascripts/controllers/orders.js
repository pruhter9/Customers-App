customers_app.controller('OrdersController', function ($scope, OrderFactory) {
	var my = this;
	my.orders = [];

	console.log("Order Controller - Here");

	OrderFactory.index(function(data) {
		my.orders = data;
		console.log(data);
	});

	my.createOrder = function() {
		OrderFactory.create(my.newOrder, function(data) {
			my.orders = data;
		});
		my.newOrder = {};
	}
})