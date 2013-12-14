'use strict';

angular.module('imiJobsApp')
  .controller('LoginCtrl', ['$scope','$location','auth', function ($scope,$location,auth ) {

    $scope.token = auth.token;
    $scope.email = null;
    $scope.password = null;
    $scope.rememberMe = true;

    $scope.login = function(){

      if( !$scope.email || !$scope.password ) {
        $scope.error = 'Email and password fields are required';
      }else {
        auth.login($scope.email,$scope.password);
        $location.path('/');
      }


    };

  }]);
