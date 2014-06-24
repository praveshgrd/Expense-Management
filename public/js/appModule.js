
(function() {
    'use strict';

// Declare app level module which depends on filters, and services
angular.module('myapp', ['myApp.controllers','myApp1.controllers','myApp2.controllers']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/add', {templateUrl: 'partials/add.html', controller:'MainCtrl1'});
        $routeProvider.when('/view', {templateUrl: 'partials/view.html',controller:'MainCtrl'});
       $routeProvider.when('/search', {templateUrl: 'partials/search.html',controller:'Searchctrl'});
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    }]);
})();