'use strict';

/**
 * @ngdoc overview
 * @name productionMapConsoleApp
 * @description
 * # productionMapConsoleApp
 *
 * Main module of the application.
 */
angular
  .module('productionMapConsoleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3ChartDirectives',
    'ui.bootstrap',
    'ui.codemirror',
    'jsTree.directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
