'use strict';

angular.module('productionMapConsoleApp').controller('ProcessesCtrl', function ($scope, $modalInstance, Processes) {

    var link_id = 1;
    $scope.process = {
        id: 0,
        name: "",
        description: "",
        order: 0,
        default_execution: false
    };

    $scope.processes = Processes.all(link_id);

    $scope.add_process = function(process){
        $scope.process = angular.copy(process);
        Processes.add(link_id, $scope.process);
    }

    $scope.delete_process = function(process){
        Processes.remove(link_id, process);
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});