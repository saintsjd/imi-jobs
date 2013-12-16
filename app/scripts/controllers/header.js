'use strict';

angular.module('imiJobsApp')
  .controller('HeaderCtrl', ['$scope','auth','$location', function ($scope, auth, $location ) {

    $scope.loggedIn = auth.isAuthenticated;
    $scope.user = auth.user;

    $scope.logout = function(){
        auth.logout();
        $location.path('/#/login');
      };

  }]);
