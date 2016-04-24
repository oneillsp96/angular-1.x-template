angular.module("app")

.factory("homeFactory", ['$http', function ($http) {

        var factory = {};

        factory.getUsers = function () {
            return $http.get('http://jsonplaceholder.typicode.com/users');
        }

        return factory;
    }]);