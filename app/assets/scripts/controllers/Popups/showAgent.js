'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:pmInstallAgentController
 * @description
 * # pmInstallAgentController
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('showAgentCtrl',['$scope', '$uibModalInstance', 'extractAndParse', 'blockFactory' , 'BaseAgentService', 'agent', function ($scope, $uibModalInstance, extractAndParse, blockFactory, BaseAgentService, agent) {
    $scope.agent = agent;
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
  }]);
