(function() {
    'use strict';

    angular.module('App.services',['App.services.rest'],['$provide',function($provide) {

        $provide.factory('addService', ['XRestService',function(rest) {
            return rest('/server/adduser');
        }]);


        $provide.factory('viewService', ['XRestService',function(rest) {
            return rest('/server/viewuser');
        }]);

        $provide.factory('searchService', ['XRestService',function(rest) {
            return rest('/server/searchuser');
        }]);


    }]);

})();