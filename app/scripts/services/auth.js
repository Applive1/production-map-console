'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.AuthService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('AuthService', ['$http', 'consts','localStorageService' , function ($http, consts,localStorageService) {
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
        register: function (user) {
            return $http.post(consts.serverUel + 'auth/local/register', user).then(function(result){
                authService.currentUser = result.data;
                localStorageService.set('loggedUser', result.data);
            });
        },
        fillAuthData: function(){
            authService.currentUser=localStorageService.get('loggedUser');
        },
        currentUser : {}
    };

    // Service Logic
    return authService
}]);