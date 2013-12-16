'use strict';

angular.module('imiJobsApp')
  .factory('auth', ['$cookieStore','$location',function ($cookieStore,$location) {

    var user = $cookieStore.get('user') || {'email':null,'token':null};

    return {
      user: user,
      login: function(email,password){
        user.email = email;
        user.token = 'TOKEN_HERE'+password;
        $cookieStore.put('user',user);
      },
      logout: function(){
        user.email = null;
        user.token = null;
        $cookieStore.remove('user',user);
        $location.path('/#/login');
      },
      isAuthenticated: function(){
        return !!user.token;
      },
    };

  }]);