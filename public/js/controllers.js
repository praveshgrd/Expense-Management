'use strict';

function AppCtrl($scope,$http,$location) {
    $scope.user = {};
    $scope.submit=function(){
        $http.post('/server/adduser',$scope.user).
            success(function(post){
                console.log(post);
                $location.path('/');
            

            })
    };
}

AppCtrl.$inject = ['$scope','$http','$location'];


function AddTransactionCtrl($scope, $http) {
    $scope.transaction = {};
    $scope.transaction.categories = [];
    $http.post('/server/adduser',$scope.transaction).success(function(data) {

        $scope.transaction.categories = data;
    })
};