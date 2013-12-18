'use strict';

angular.module('imiJobsApp')
  .controller('NewReportCtrl', ['$scope','auth','jobs', function ($scope, auth, jobs ) {

    $scope.description = null;

    $scope.newReport = function(description){
      console.log(description);
      if( description ){
        jobs.newJob($scope.description);
        return true;
      }
    };

  }]);
