'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('MessagesCtrl',function ($scope, $modalInstance, message) {

  	$scope.message = message;
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

  });
