'use strict';

/**
 * @ngdoc overview
 * @name productionMapConsoleApp
 * @description
 * # productionMapConsoleApp
 *
 * Main module of the application.
 */
angular.module('productionMapConsoleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3',
    'mwl.calendar',
    'ui.bootstrap',
    'ui.codemirror',
    'xeditable',
    'ngDraggable',
    'LocalStorageModule',
    'angularFileUpload',
    'angular-cron-jobs',
    'ngStorage',
    'ngSails',
    'angularFileUpload'
  ])
  .config(['$routeProvider', '$httpProvider', '$sailsProvider', 'consts', function ($routeProvider, $httpProvider, $sailsProvider, consts) {

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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.withCredentials = true;
    $sailsProvider.url = consts.serverUrl;

  }])
  .run(['editableOptions', '$location', 'AuthService', '$rootScope', function (editableOptions, $location, AuthService, $rootScope) {
    AuthService.fillAuthData();
    $rootScope.logout = AuthService.logout;
    editableOptions.theme = 'bs3'; // bootstrap3 theme
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
      if (next.$$route.originalPath != '/register')
        AuthService.isLoggedIn().error(function (response) {
          $location.path('/login');
        })
    });
  }]);
