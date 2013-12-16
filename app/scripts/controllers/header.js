'use strict';

angular.module('imiJobsApp')
  .controller('HeaderCtrl', ['$scope','auth', function ($scope, auth ) {

    $scope.loggedIn = auth.isAuthenticated;
    $scope.email = auth.user.email;


  }]);
