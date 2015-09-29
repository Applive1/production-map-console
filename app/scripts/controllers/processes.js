angular.module('productionMapConsoleApp').controller('ProcessesCtrl', function ($scope, $modalInstance, Processes) {

  var link_id = 1;
  $scope.processes = Processes.all(link_id);

  $scope.add_process = function(process){
    Processes.add(link_id, process);
    $scope.processes.push(process);
  }

  $scope.delete_process = function(process){
    Processes.remove(link_id, process);
    var index = $scope.processes.indexOf(process);
    $scope.processes.splice(index, 1);
  }

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});