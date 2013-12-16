'use strict';

angular.module('imiJobsApp')
  .controller('MainCtrl', ['$scope','$location','auth','jobs', function ($scope, $location, auth, jobs) {

    if( !auth.isAuthenticated() ){
      $location.path('/login');
    }

    $scope.jobs = jobs;
    $scope.token = auth.token;

  }]);
