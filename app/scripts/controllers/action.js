'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:ActionCtrl
 * @description
 * # ActionCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('ActionCtrl', function ($scope, $modalInstance, blockFactory, Processes, link, process, Messages, map) {
    function init(){
    	$scope.action = {
	    	server: '',
	    	method: '',
	    	params: {},
	    	name: '',
	    	timeout: 0,
	    	timeunit: 'seconds',
	    	retries: 0,
	    	mandatory: false,
	    	suspend: false
	    };
	    $scope.processServers = [];
	    var servers = [link.source, link.target];
	    console.log(link);
	    angular.forEach(servers, function(server, name){
            $scope.processServers.push({
                type: server.type,
                methods: $scope.getServerMethods(server),
                name: server.name,
                id: server.id
            });
        });
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.getServerMethods = function(server){
        console.log(blockFactory.get(server.type).methods);
    	return blockFactory.get(server.type).methods;
    };
    $scope.addAction = function(action){
    	Processes.addAction(link.id, process.id, action);
    	console.log(action);
    	$modalInstance.dismiss('sucess');
    }
    $scope.testAction =function(){
    	Processes.addAction(link.id, process.id, $scope.action);
        Processes.testAction(
                {
                 action:$scope.action,
                 map: map
                }).success(function (result) {
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

    $scope.getMethods = function(type){
        blockFactory.getMethods(type).then(function(methods){
            $scope.action.server.methods = methods;
        });
    }
    init();
  });
