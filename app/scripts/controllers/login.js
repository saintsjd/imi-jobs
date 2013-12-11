'use strict';

angular.module('imiJobsApp')
  .controller('LoginCtrl', ['$scope','auth', function ($scope, auth ) {

    $scope.token = auth.token;
    $scope.email = null;
    $scope.password = null;
    $scope.rememberMe = true;

    $scope.login = function(){
      console.log($scope.email);
    };

  }]);
