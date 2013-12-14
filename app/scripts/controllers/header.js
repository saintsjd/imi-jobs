'use strict';

angular.module('imiJobsApp')
  .controller('HeaderCtrl', ['$scope','auth', function ($scope, auth ) {

    if( auth.user.token ){
      $scope.loggedIn = true;
      $scope.email = auth.user.email;
    }else{
      $scope.loggedIn = false;
    }

  }]);
