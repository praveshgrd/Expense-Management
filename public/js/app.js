angular.module('myApp',['myApp.controllers','myApp1.controllers','myApp2.controllers'], function($routeProvider, $locationProvider){

  $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller:'MainCtrl1'});
  $routeProvider.when('/view', {templateUrl: 'partials/view.html',controller:'MainCtrl'});
  $routeProvider.when('/search', {templateUrl: 'partials/search.html',controller:'Searchctrl'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.otherwise({redirectTo: '/'});
});


function AppController($scope, $route, $routeParams, $location) {
  
  $scope.setRoute = function(route) {
    $location.path(route);
    console.log('Route:', route);
  };
  console.log('AppController ');
}




