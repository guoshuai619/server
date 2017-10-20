app.factory('service',function($http,$q){
    return {
        server:function(type,url){
            var defer = $q.defer();
            if(type == 'jsonp' || type == 'JSONP'){
                $.ajax({
                    url:url,
                    dataType:type,
                    success:function(data){
                        defer.resolve(data)
                    },
                    error:function(res){
                        defer.reject(res)
                    }
                })
            }else{
                $http({
                    method:type,
                    url:url
                }).then(function(data){
                    defer.resolve(data);
                },function(err){
                    defer.reject(err.message);
                })

            }
            return defer.promise
        }
    }
});