angular.module("app")

.controller("homeController", ['$scope', 'homeFactory', function ($scope, homeFactory) {

    homeFactory.getUsers()
      .success(function (userData) {
        $scope.users = userData;
      })
      .error(function (e) {
        console.log(e)
      })

    //$scope.smokeTest = "testing..."


  }]);