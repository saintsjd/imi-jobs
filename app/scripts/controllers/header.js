'use strict';

angular.module('imiJobsApp')
  .controller('HeaderCtrl', ['$scope','auth', function ($scope, auth ) {

    $scope.loggedIn = auth.isAuthenticated;
    $scope.user = auth.user;

    $scope.logout = function(){
        auth.logout();
      };

  }]);
