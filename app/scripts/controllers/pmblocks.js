'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:PmblocksCtrl
 * @description
 * # PmblocksCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('PmblocksCtrl',function ($scope, $modalInstance, server) {
  	$scope.server = server;
  	$scope.save = function(){
  		$modalInstance.close($scope.server);
  	}
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

  });