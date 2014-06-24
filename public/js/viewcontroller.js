(function() {
    'use strict';

    var appControllers = angular.module('myApp1.controllers', ['App.services']);
    appControllers.controller(
        'MainCtrl',
        [
            '$scope',
            'viewService',
            '$http',
            '$location',
            mainCtrl
        ]
    );
    function mainCtrl($scope,myservice,$http,$location) {




        $scope.myData = {};

        myservice.list().then(function(data){
            // $scope.myData =data;
            console.log(data);
            $scope.myData = data;
           //  $location.path('/');

        })

    }

})();


