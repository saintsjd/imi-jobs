'use strict';

angular.module('imiJobsApp')
  .controller('HeaderCtrl', ['$scope','auth', function ($scope, auth ) {

    if( auth.token ){
      $scope.loggedIn = true;
    }else{
      $scope.loggedIn = false;
    }

  }]);
