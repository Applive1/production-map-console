'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp').controller('AuthCtrl', ['$scope', 'AuthService','$location', function ($scope, AuthService, $location) {
    $scope.userModel = {};

    $scope.login = function () {
        AuthService.login($scope.userModel.username, $scope.userModel.password).success(function (response) {
            $location.path('/');
        }).error(function (response) {
            console.log(response);
        });
    }

    $scope.register = function () {
        AuthService.register($scope.userModel).then();
    }
}]);


