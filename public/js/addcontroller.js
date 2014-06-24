(function() {
    'use strict';

    var appControllers = angular.module('myApp.controllers', ['App.services']);
    appControllers.controller(
        'MainCtrl1',
        [
            '$scope',
            'addService',
            '$http',
            '$location',
            mainCtrl1
        ]
    );
    function mainCtrl1($scope,myservice,$http,$location) {
        $scope.user = {};

        $scope.submit=function(){
            var props={
                firstName:$scope.firstName,
                lastName:$scope.lastName

            };

            myservice.create(props).then(function(data){
                console.log(data);
                           if(data.Success==false) {
                                $scope.result1="Data is Already Exists";
                                 $scope.result="";
                           }
                    else{
                        $scope.result="Data is Inserted Successfully";
                           }
                 //$scope.result=data;
               // $location.path('/');

            });
        }
        /*
         $scope.myData = {};
         // $scope.transaction.categories = [];
         myservice.list().then(function(data){
         // $scope.myData =data;
         console.log(data);
         $scope.myData = data;
         $location.path('/');

         })
         */
    }

})();


