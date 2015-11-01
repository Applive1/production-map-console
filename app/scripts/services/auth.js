'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.AuthService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('AuthService', ['$http', 'consts','localStorageService','$location','$cookies' , function ($http, consts,localStorageService,$location,$cookies) {
    var authService = {
        isLoggedIn: function () {
            return $http.get(consts.serverUel + 'isLoggedIn')
        },
        login: function (username, password) {
            return $http.post(consts.serverUel + 'auth/local', {
                identifier: username,
                password: password
            }).then(function(result){
                authService.currentUser = result.data;
                localStorageService.set('loggedUser', result.data);
            });
        },
        logout : function(){
            authService.currentUser = {};
            localStorageService.remove('loggedUser');
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function (v, k) {
                $cookies.remove(k);
            });
            $location.path('/login');
        },
        register: function (user) {
            return $http.post(consts.serverUel + 'auth/local/register', user).then(function(result){
                authService.currentUser = result.data;
                localStorageService.set('loggedUser', result.data);
            });
        },
        fillAuthData: function(){
            var userData=localStorageService.get('loggedUser');
            if (userData)
                authService.currentUser = userData;
            else
                $location.path('/login');
        },
        currentUser : {}
    };

    // Service Logic
    return authService
}]);