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
    'nvd3ChartDirectives',
    'ui.bootstrap',
    'ui.codemirror',
    'xeditable',
    'ngDraggable',
    'LocalStorageModule'
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
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthCtrl'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AuthCtrl'
            })
            .when('/Admin', {
                templateUrl: 'views/AdminPanel.html',
                controller: 'AdminCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    })
    .config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .run(function (editableOptions, $location, AuthService, $rootScope) {
        AuthService.fillAuthData();
        $rootScope.logout = AuthService.logout;
        editableOptions.theme = 'bs3'; // bootstrap3 theme
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (next.$$route.originalPath != '/register')
                AuthService.isLoggedIn().error(function (response) {
                    $location.path('/login');
                })
        });
    });
