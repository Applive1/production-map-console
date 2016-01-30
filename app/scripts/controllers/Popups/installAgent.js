'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:pmInstallAgentController
 * @description
 * # pmInstallAgentController
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('installAgentCtrl',['$scope', '$uibModalInstance', 'extractAndParse', 'blockFactory',function ($scope, $uibModalInstance, extractAndParse, blockFactory) {
    $scope.handleFiles = function (files) {
	    $scope.error = null;

	    extractAndParse(files[0])
	      .then(function (data) {
	        /* install the agent */
	        $scope.data = data;
	      }, function(reason){
	        $scope.error = reason.message;
	      });
	  };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.installAgent = function(){
    	if($scope.data){
    		blockFactory.add($scope.data.type, $scope.data.methods, $scope.data.imgUrl).then(function(msg){
                $uibModalInstance.close(msg.data);
            });
    	}
    }
  }]);
