'use strict';
function AddTransactionCtrl($scope, $http) {
    $scope.transaction = {};
    //$scope.transaction.myData = [];
    $http.post('/server/viewuser',$scope.transaction).success(function(data) {

        console.log(data);
        //$scope.user.myData = data;
        $scope.myData =data;
    })
};