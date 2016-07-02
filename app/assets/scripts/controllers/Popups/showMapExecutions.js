'use strict';
angular.module('productionMapConsoleApp').filter('reverse', function() {
 return function(items) {
  return items.slice().reverse();
 };
});


angular.module('productionMapConsoleApp').controller('MapExecutionsCtrl', ['$scope', '$window', '$uibModalInstance', 'BaseAgentService', 'Popups', 'map',function ($scope, $window, $uibModalInstance, BaseAgentService, Popups, map) {

    $scope.map = map;
    $scope.executions = [];
    $scope.executionKey = "";

    $scope.cancel = function () {
        console.log(JSON.stringify($scope.execution));
        $uibModalInstance.dismiss();
    };

    $scope.showResult = function(execution){
      if(execution.status < 0) {
        return "Fail";
      }
      else {
        return "Success";
      }
    };

    for (var i = 0; i < map.versions.length; i++) {
      var version = map.versions[i];
      for (var j = 0 ; j < map.versions[i].executions.length; j++) {
        $scope.executions.push(map.versions[i].executions[j]);
      }
    }

    $scope.selectExecutions = function(){
      if(map.versions[$scope.executionKey]){
        $scope.executions = map.versions[$scope.executionKey].executions;
      }
    };

    $scope.showBaseExecutions = function(index) {
      Popups.open({
          templateUrl: 'views/Popups/showBaseExecutions.html',
          controller: 'BaseExecutionCtrl',
          resolve: { execution: $scope.executions[index] }
        }, function () {
          console.log("done execution log");
        });
    };

    $scope.showExecution = function(index) {
      Popups.open({
          templateUrl: 'views/Popups/showMapExecution.html',
          controller: 'MapExecutionCtrl',
          resolve: { execution: $scope.executions[index] }
        }, function () {
          console.log("done execution log");
        });
    };

}]);
