'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:EditActionCtrl
 * @description
 * # EditActionCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('EditActionCtrl', function ($scope, $modalInstance, blockFactory, Processes, link, action) {
    function init(){
	    $scope.processServers = [];
	    var servers = [link.source, link.target];
	    console.log(link);
	    for(var i=0; i< servers.length; i++){
	    	var server = servers[i];
	    	$scope.processServers.push({
	    		type: server.type,
	    		methods: $scope.getServerMethods(server),
	    		name: server.name
	    	});
	    }
        console.log(action);
        $scope.action = action;
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.getServerMethods = function(server){
    	return blockFactory.getMethods(server.type);
    };
    $scope.addAction = function(action){
    	$modalInstance.dismiss('sucess');
    }
    $scope.testAction =function(){
        Processes.testAction({ action: $scope.action, map: map}).success(function (result) {
                console.log(result);
                Messages.add(result);
                $modalInstance.close({message: result});
            })
            .error(function (err) {
                console.log('****** FAILD *******');
                console.log(err);
                console.log('********************');
            });
    }
    init();
  });
