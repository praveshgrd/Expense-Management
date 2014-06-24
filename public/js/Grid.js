(function() {
    'use strict';
    
	var appControllers = angular.module('myApp.controllers1', ['myService']);
	appControllers.controller(
		'MainCtrl', 
		[
			'$scope',
			'myService',
			mainCtrl
		]
	);
	
	function mainCtrl($scope,myService) {
	  myService().then(function(data){
		$scope.myData =data.myData;
     	 console.log($scope.myData);
	  });
	}
})();


