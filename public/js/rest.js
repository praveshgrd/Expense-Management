

angular.module('App.services.rest',[],['$provide',function($provide) {


    $provide.factory('XRestService',['$http','$q',function($http,$q) {

        function RestService(url) {
            this.url = url;
        }
        RestService.prototype.list = function list() {
            console.log("jkkl");

            var deferred = $q.defer();
            var url = this.url;
            var headers = {};
            $http({
                method: 'Post',
                url: url ,
                headers: headers

            }).then(
                function(response) {
                    console.log("111");

                    deferred.resolve(response.data);

                }

            );
            return deferred.promise;
        };

        RestService.prototype.create = function update(values) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: this.url,
                data: values

            }).then(
                function(response) {
                    deferred.resolve(response.data);
                }

            );
            return deferred.promise;
        };


        RestService.prototype.search = function update(values) {
            var deferred = $q.defer();
            $http({
                method: 'Post',
                url: this.url,
                data:values

            }).then(
                function(response) {
                    deferred.resolve(response.data);
                }

            );
            return deferred.promise;
        };



        function factory(template) {
      return new RestService(template);
        }

     return factory;

 }]);

}]);