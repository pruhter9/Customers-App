/*Angular Routes*/
customers_app.config(function ($routeProvider){
$routeProvider
    .when('/',{
        templateUrl : 'partials/customers.html'
    })
    .when('/order', {
      templateUrl : 'partials/orders.html'
    })
    .otherwise('/');
});