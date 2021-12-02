var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/content", {
        templateUrl : "content.html",
    })
    .when("/gioiThieu", {
        templateUrl : "gioiThieu.html",
    })
    .when("/lienHe", {
        templateUrl : "lienHe.html",
    })
    .when("/sanPham", {
        templateUrl : "sanPham.html",
    })
    .otherwise({
        redirectTo: '/content'
    })
});