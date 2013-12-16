'use strict';

angular.module('imiJobsApp')
  .controller('HeaderCtrl', ['$scope','auth', function ($scope, auth ) {

    $scope.loggedIn = auth.isAuthenticated;
    $scope.$watch(function() {
        return auth.user;
      }, function(user) {
        $scope.user = user;
    });

  }]);
