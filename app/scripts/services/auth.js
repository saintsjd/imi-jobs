'use strict';

angular.module('imiJobsApp')
  .factory('auth', function() {

    this.user = {'email':null,'token':null};

    this.login = function(user,password){
      this.user = { 'email': user, 'token':'TOKEN_HERE'+password };
    };

    this.logout = function(){
      this.user = null;
    };

    return {
      user: this.user,
      login: this.login,
      logout: this.logout
    };
  });