'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:pmInstallAgentController
 * @description
 * # pmInstallAgentController
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('installAgentCtrl',['$scope', '$uibModalInstance', 'extractAndParse', 'blockFactory' , 'BaseAgentService', function ($scope, $uibModalInstance, extractAndParse, blockFactory, BaseAgentService) {
    $scope.dedicatedAgents = [];
    $scope.handleFiles = function (files) {
       for(var file in files) {
          file = files[file];
          $scope.error = null;

          extractAndParse(file)
            .then(function (data) {
              /* install the agent */
              $scope.dedicatedAgents.push({file: file, data: data});
              $scope.showAgent($scope.dedicatedAgents.length - 1);
            }, function(reason){
              $scope.error = reason.message;
            });
       }
	  };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.installAgent = function(){
      BaseAgentService.getAgents().then(function (res) {
        var baseAgents = res.data;
        async.each($scope.dedicatedAgents, function(agent, callback) {
          blockFactory.add(agent.data.type, agent.data.methods, agent.data.imgUrl, agent.file, baseAgents).then(function(msg){
            callback();
          });
        }, function(err){
            if( err ) {
              $uibModalInstance.close(err);
            } else {
                $uibModalInstance.close();
            }
        });
      });
    };

    $scope.showAgent = function(index) {
      $scope.agentIndex = index;
    };
  }]);
