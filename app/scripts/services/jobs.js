'use strict';

angular.module('imiJobsApp')
  .factory('jobs', ['$timeout', function( $timeout ) {

    var jobs = [];

    $timeout( function(){
      jobs.unshift(
        {
          id: 1,
          description:'North Dakota Expansion'
        }
      );
      jobs.unshift(
        {
          id: 2,
          description:'Chicago Prospect List'
        }
      );
      jobs.unshift(
        {
          id: 3,
          description:'Future Branch Locations'
        }
      );
    }, 4000);


    return {
      jobs: jobs,
      newJob: function(description) {
        jobs.unshift( {description:description, id: jobs.length+1 } );
        return jobs[0];
      }
    };
  }]);