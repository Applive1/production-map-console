'use strict';

angular.module('productionMapConsoleApp').controller('ProcessesCtrl', ['$scope', '$uibModalInstance','$timeout', 'Popups', 'link', 'Messages', 'map', 'source','target','ProcessesService',
  function ($scope, $uibModalInstance,$timeout, Popups, link, Messages, map,source,target,ProcessesService) {

    var newProc = function() {
      $scope.process = {
        name: "",
        description: "",
        order: 0,
        default_execution: false,
        mandatory: false,
        actions: [],
        result: ''
      };
    }

    newProc();

    $scope.link = link;
    $scope.link.processes.forEach(function(proc){
      proc.inside = true;
    })

    /* Processes operations */
    $scope.add_process = function(){
      $scope.process.inside = true;
      $scope.link.processes.push(angular.copy($scope.process));
      newProc();
    };

    $scope.createNew = function(){
      newProc();
    };

    $scope.delete_process = function(process){
      var ProcIndex = $scope.link.processes.indexOf($scope.process);

      if (ProcIndex > -1) {
        $scope.link.processes.splice(ProcIndex,1);
        newProc();
      }
    };

    /* Actions operations */
    $scope.addAction = function(){
      manageAction(null,function(action){
        $scope.process.actions.push(action);
        $scope.selectAction(action,$scope.process.actions.length-1);
      });
    };

    $scope.removeAction = function(){
      $scope.process.actions.splice($scope.selectedIndex,1);
      delete $scope.selectedIndex;
      delete $scope.selectedAction;
    };

    $scope.editAction = function(){
      manageAction($scope.selectedAction,function(editedAction){
        angular.copy(editedAction,$scope.selectedAction);
      });
    }

    var manageAction = function(action,cb){
      Popups.open({
        templateUrl: 'views/add_action.html',
        controller: 'ActionCtrl',
        resolve : {link: link, process: $scope.process, map: map,source:source,target: target,action:angular.copy(action)}
      },cb);
    }

    /* change action order up */
    $scope.moveActionUp = function(){
      var prevAction = $scope.process.actions[$scope.selectedIndex-1];
      $scope.process.actions[$scope.selectedIndex-1] = $scope.selectedAction;
      $scope.process.actions[$scope.selectedIndex]=prevAction;
      $scope.selectedIndex--;
    }

    /* change action order down */
    $scope.moveActionDown = function(){
      var nextAction = $scope.process.actions[$scope.selectedIndex+1];
      $scope.process.actions[$scope.selectedIndex+1] = $scope.selectedAction;
      $scope.process.actions[$scope.selectedIndex]=nextAction;
      $scope.selectedIndex++;

    }

    $scope.selectAction = function(action,index){
      $scope.selectedAction = action;
      $scope.selectedIndex = index;
    }

    $scope.testProcess = function(){
      ProcessesService.testProcess({
            process: $scope.process,
            map: map
        }).success(function (result) {
                console.log(result);
                Messages.add(result);
                $uibModalInstance.close({
                                        linkId: link.id,
                                        condition: angular.copy($scope.link.condition),
                                        conditionCode: angular.copy($scope.link.conditionCode),
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
       $uibModalInstance.close({
          link: $scope.link
      });
    };

    $scope.addProcessCondition = function () {
        Popups.open({
            templateUrl: 'views/Popups/add_condition.html',
            controller: 'conditionCtrl',
            resolve : { condition: $scope.process }
        }, function (conditionCode){
            $scope.process.conditionCode = conditionCode;
        });
    };

    $scope.addLinkCondition = function () {
        Popups.open({
            templateUrl: 'views/Popups/add_condition.html',
            controller: 'conditionCtrl',
            resolve : { condition: $scope.link }
        }, function (conditionCode){
            $scope.link.conditionCode = conditionCode;
        });
    };
}]);
