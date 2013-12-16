'use strict';

angular.module('imiJobsApp')
  .controller('NewReportCtrl', ['$scope','auth','jobs', function ($scope, auth, jobs ) {

    $scope.description = null;

    $scope.newReport = function(){
      console.log(jobs.jobs);
      if( $scope.description ){
        jobs.newJob($scope.description);
        return true;
      }
    };

  }]);
