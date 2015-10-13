'use strict';

angular.module('productionMapConsoleApp').controller('ProcessesCtrl', function ($scope, $modalInstance, Processes, Popups, link) {

    $scope.process = {
        id: 0,
        name: "",
        description: "",
        order: 0,
        default_execution: false,
        actions: []
    };
    $scope.selectedAction = {};

    $scope.processes = Processes.all(link.id);

    /* Processes operations */
    $scope.add_process = function(process){
        $scope.process = angular.copy(process);
        $scope.process = Processes.add(link.id, $scope.process);
    };

    $scope.delete_process = function(process){
        Processes.remove(link.id, process);
    };

    /* Actions operations */
    $scope.addAction = function(){
        Popups.open('views/add_action.html','ActionCtrl', {link: link, process: $scope.process});
    };

    $scope.removeAction = function(){
        Processes.removeAction(link.id, $scope.process.id, $scope.selectedAction);
    };

    $scope.editAction = function(){
        Popups.open('views/add_action.html','EditActionCtrl', {link: link, action: $scope.selectedAction});
    }

    /* change action order up */
    $scope.moveActionUp = function(){
        for(var i=0;i<$scope.process.actions.length;i++){
            var action = $scope.process.actions[i];
            if($scope.selectedAction.order - 1 === action.order){
                $scope.selectedAction.order = action.order;
                action.order = action.order + 1;
                break;
            }
        }
    }

    /* change action order down */
    $scope.moveActionDown = function(){
        for(var i=0;i<$scope.process.actions.length;i++){
            var action = $scope.process.actions[i];
            if($scope.selectedAction.order + 1 === action.order){
                $scope.selectedAction.order = action.order;
                action.order = action.order - 1;
                break;
            }
        }
    }

    $scope.selectAction = function(action){
        $scope.selectedAction = action;
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});