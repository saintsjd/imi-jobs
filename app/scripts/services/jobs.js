'use strict';

angular.module('imiJobsApp')
  .factory('jobs', ['$timeout', function( $timeout ) {

    var jobs = [];

    /*$timeout( function(){
      jobs.push(
        {
          id: 1,
          description:'North Dakota Expansion'
        }
      );
      jobs.push(
        {
          id: 2,
          description:'Chicago Prospect List'
        }
      );
      jobs.push(
        {
          id: 3,
          description:'Future Branch Locations'
        }
      );
      console.log(jobs);
    }, 4000);*/


    return {
      jobs: jobs,
      getJobs: function() {
        return jobs;
      },
    };
  }]);