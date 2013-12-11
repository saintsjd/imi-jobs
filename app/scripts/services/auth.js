'use strict';

angular.module('imiJobsApp')
  .factory('auth', function() {
    var token = null;

    function login (){
      token = 'A_SECURE_TOKEN';
    }

    function logout (){
      token = null;
    }

    //login();

    return {
      token: token,
      login: login,
      logout: logout
    };
  });