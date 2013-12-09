'use strict';

angular.module('imiJobsApp')
  .controller('MainCtrl', ['$scope','jobs', function ($scope, jobs) {

    $scope.jobs = jobs;


  }]);
