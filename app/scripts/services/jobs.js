'use strict';

angular.module('imiJobsApp')
  .factory('jobs', ['$timeout', function( $timeout ) {

    var jobs = [];

    $timeout( function(){
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
    }, 4000);


    return {
      jobs: jobs,
      newJob: function(description) {
        jobs.push( {description:description, id: jobs.length+1 } );
      }
    };
  }]);