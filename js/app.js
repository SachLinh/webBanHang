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
    .when("/chiTiet", {
        templateUrl : "chiTietSanPham.html",
    })
    .when("/gioHang", {
        templateUrl : "gioHang.html",
    })
    .when("/dangNhap", {
        templateUrl : "dangNhap.html",
    })
    .otherwise({
        redirectTo: '/content'
    })
});