'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp').controller('AuthCtrl', ['$scope', 'AuthService','$location',
    function ($scope, AuthService, $location) {
    $scope.userModel = {};

    $scope.login = function () {
        AuthService.login($scope.userModel.username, $scope.userModel.password).then(function (response) {
            $location.path('/');
        },function (response) {
            console.log(response);
        });
    }

    $scope.register = function () {
        AuthService.register($scope.userModel).then(function(result){
            $location.path('/');
        },function(err){
            $scope.errors = err.data;
        });
    }
}]);


