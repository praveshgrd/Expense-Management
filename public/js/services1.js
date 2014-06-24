(function() {
    'use strict';

    angular.module('App.services',['App.services.rest'],['$provide',function($provide) {

        $provide.factory('myservice', ['XRestService',function(rest) {
            return rest('/server/viewuser');
        }]);



    }]);

})();