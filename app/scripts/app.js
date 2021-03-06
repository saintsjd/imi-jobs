'use strict';

angular.module('imiJobsApp', [
  'ngCookies',
  //'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/reports/:reportId', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(false);
  }]);