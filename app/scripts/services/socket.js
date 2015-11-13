'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.AuthService
 * @description
 * # popups
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp').factory('Socket', ['consts' , function (consts) {
    return io.sails.connect(consts.serverUrl)
}]);