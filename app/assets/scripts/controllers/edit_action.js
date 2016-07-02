'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:EditActionCtrl
 * @description
 * # EditActionCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('EditActionCtrl', ['$scope', '$uibModalInstance', 'blockFactory', 'link', 'action',function ($scope, $uibModalInstance, blockFactory, link, action) {
    function init(){
        $scope.action = action;
	    $scope.processServers = [];

        $scope.action.server = {
            type: link.target.type,
            name: link.target.name,
            id: link.target.id,
            url: link.target.serverUrl
          };

        blockFactory.getMethods($scope.action.server.type).then(function(methods){
            $scope.methods = methods;
        });
        console.log(action);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.getServerMethods = function(server){
    	return blockFactory.getMethods(server.type);
    };
    $scope.addAction = function(action){
    	$uibModalInstance.dismiss('sucess');
    }
    $scope.testAction =function(){
        Processes.testAction({ action: $scope.action, map: map}).success(function (result) {
                console.log(result);
                Messages.add(result);
                $uibModalInstance.close({message: result});
            })
            .error(function (err) {
                console.log('****** FAILD *******');
                console.log(err);
                console.log('********************');
            });
    }

    $scope.getMethods = function(type){
        blockFactory.getMethods(type).then(function(methods){
            $scope.methods = methods;
        });
    }
    $scope.showCollection = function(param){
        try{
            return param.type === 'collection' && ((!action.params[param.name].code) || (action.params[param.name].code  === false));
        } catch(e) {
            console.log(e);
            return true;
        }
    }
    init();
  }]);
