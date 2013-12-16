'use strict';

angular.module('imiJobsApp')
  .factory('auth', function () {

    var user = {'email':null,'token':null};

    return {
      user: user,
      login: function(email,password){
        user.email = email;
        user.token = 'TOKEN_HERE'+password;
      },
      logout: function(){
        user.email = null;
        user.token = null;
      },
      isAuthenticated: function(){
        return !!user.token;
      },
    };

  });