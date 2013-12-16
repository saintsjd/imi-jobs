'use strict';

angular.module('imiJobsApp')
  .controller('MainCtrl', ['$scope','$location','auth','$timeout','jobs', function ($scope, $location, auth, $timeout, jobs) {

    if( !auth.isAuthenticated() ){
      $location.path('/login');
    }

    $scope.jobs = jobs.jobs;
    $scope.token = auth.token;


  }]);
