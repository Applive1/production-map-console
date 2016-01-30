'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('MessagesCtrl',['$scope', '$uibModalInstance', 'message',function ($scope, $uibModalInstance, message) {

  	$scope.message = message;
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

  }]);
