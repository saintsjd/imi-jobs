'use strict';

angular.module('imiJobsApp')
  .controller('MainCtrl', ['$scope','$location','auth','jobs', function ($scope, $location, auth, jobs) {

    if( !auth.user.token ){
      $location.path('/login');
    }

    $scope.jobs = jobs;

  }]);
