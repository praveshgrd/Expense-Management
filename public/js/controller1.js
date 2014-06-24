(function() {
    'use strict';

    var appControllers = angular.module('myApp.controllers',[]);
    appControllers.controller(
        'MainCtrl',
        [
            '$scope',

            '$http',
            '$location',
            mainCtrl
        ]
    );

    function mainCtrl($scope,$http,$location) {
        $scope.user = {};
        $scope.submit=function(){
            $http.post('/server/adduser',$scope.user).
                success(function(post){
                    console.log(post);
                    $location.path('/');


                })
        };
    }
})();


