'use strict';

angular.module('productionMapConsoleApp').controller('ProcessesCtrl', function ($scope, $modalInstance, Processes, Popups, link, Messages, map) {

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

    console.log(map);
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
        Popups.open('views/add_action.html','ActionCtrl', {link: link, process: $scope.process, map: map});
    };

    $scope.removeAction = function(){
        Processes.removeAction(link.id, $scope.process.id, $scope.selectedAction);
    };

    $scope.editAction = function(){
        Popups.open('views/add_action.html','EditActionCtrl', {link: link, action: $scope.selectedAction, map: map});
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

    $scope.testProcess = function(){
        Processes.testProcess($scope.process).success(function (result) {
                console.log(result);
                Messages.add(result);
                $modalInstance.close({
                                        linkId: link.id,
                                        process: angular.copy($scope.process)
                                      });
            })
            .error(function (err) {
                console.log('****** FAILD *******');
                console.log(err);
                console.log('********************');
            });
    }

    $scope.cancel = function () {
        var result = {
            linkId: link.id,
            process: angular.copy($scope.process)
        };
        $modalInstance.close(result);
    };
});