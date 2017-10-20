var app = angular.module('app',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('server',{
            url:'/server',
            templateUrl:'App/view/server.html',
            controller:'serverController'
        });
    $urlRouterProvider.otherwise('/server')
});