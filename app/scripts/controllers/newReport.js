'use strict';

angular.module('imiJobsApp')
  .controller('NewReportCtrl', ['$scope','$location','jobs', function ($scope,$location,jobs ) {

    $scope.description = null;
    $scope.error = null;

    $scope.newReport = function(){
      $scope.error = null;
      if( $scope.description ){
        var newJob = jobs.newJob($scope.description);
        console.log(newJob.id);
        console.log('/reports/'+newJob.id);
        $location.path('/reports/'+newJob.id);
        return true;
      }else{
        $scope.error = 'Report name is required.';
      }
    };

  }]);