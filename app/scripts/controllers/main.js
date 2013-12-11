'use strict';

angular.module('imiJobsApp')
  .controller('MainCtrl', ['$scope','auth','jobs', function ($scope, auth, jobs) {

    $scope.jobs = jobs;
    $scope.token = auth.token;

  }]);
