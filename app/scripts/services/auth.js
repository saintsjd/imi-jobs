'use strict';

angular.module('imiJobsApp')
  .factory('auth', function () {

    var auth = {
      user: {'email':null,'token':null},
      token: null,
      login: function(user,password){
        auth.user = { 'email': user, 'token':'TOKEN_HERE'+password };
        auth.token = 'TOKEN_HERE'+password;
      },
      logout: function(){
        auth.user = null;
        auth.token = null;
      },
      isAuthenticated: function(){
        return !!auth.token;
      },
    };

    return auth;
  });