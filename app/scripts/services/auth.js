'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.AuthService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('AuthService', ['$http', 'consts','localStorageService','$location','$cookies','$rootScope' ,
    function ($http, consts,localStorageService,$location,$cookies,$rootScope) {
    var authService = {
        isLoggedIn: function () {
            return $http.get(consts.serverUel + 'isLoggedIn')
        },
        login: function (username, password) {
            return $http.post(consts.serverUel + 'auth/local', {
                identifier: username,
                password: password
            }).then(function(result){
                localStorageService.set('loggedUser', result.data);
                authService.fillAuthData();
            });
        },
        logout : function(){
            authService.currentUser = {};
            localStorageService.remove('loggedUser');
            delete $rootScope.currentUser;
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function (v, k) {
                $cookies.remove(k);
            });
            $location.path('/login');
        },
        register: function (user) {
            return $http.post(consts.serverUel + 'auth/local/register', user).then(function(result){
                localStorageService.set('loggedUser', result.data);
                authService.fillAuthData();
            });
        },
        fillAuthData: function(){
            var userData=localStorageService.get('loggedUser');
            if (userData){
                $rootScope.currentUser = userData;
                authService.currentUser = userData;
            }
            else
                $location.path('/login');
        },
        currentUser : {}
    };

    // Service Logic
    return authService
}]);