(function(){

    'use strict';

    var app=angular.module('myApp2.controllers',['App.services'])

    app.controller('Searchctrl',

        ['$scope',
         'searchService',
          '$http',
          '$location',
           searchCtrl
        ]
    );

    function searchCtrl($scope,myservice,$http,$location){
        //$scope.myData={};
        $scope.submit=function(){

            var props={
                firstName:$scope.firstName


            };
            myservice.search(props).then(function(data){
                   console.log(data);

                   if(!data ||!data.length)  {
                   $scope.result="requested data not Matched";
                   $scope.searchResult="";
                    $scope.result1 ="";
                   }
                else{
                       $scope.result1="";
                       $scope.searchResult=data;
                   }
                   // $scope.result=data;

                //$scope.myData=data;


            });
        }

    }
})()