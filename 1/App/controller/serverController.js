app.controller('serverController',['$scope','service',function($scope,service){
    service.server('get','http://localhost:8090?server').then(function(res){
        $scope.datas = res.data;
    })
}]);