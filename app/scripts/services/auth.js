'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.AuthService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('AuthService', ['$http', 'consts' , function ($http, consts) {
    // Service Logic
    return {
        isLoggedIn: function () {
            return $http.get(consts.serverUel + 'isLoggedIn')
        },
        login: function (username, password) {
            return $http.post(consts.serverUel + 'auth/local', {
                identifier: username,
                password: password
            });
        },
        register: function (user) {
            return $http.post(consts.serverUel + 'auth/local/register', user);
        }
    };
}]);