'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:ActionCtrl
 * @description
 * # ActionCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('ActionCtrl', function ($scope, $modalInstance, blockFactory, Processes, link, process, Messages) {
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
	    for(var i=0; i< servers.length; i++){
	    	var server = servers[i];
	    	$scope.processServers.push({
	    		type: server.type,
	    		methods: $scope.getServerMethods(server),
	    		name: server.name
	    	});
	    }
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.getServerMethods = function(server){
    	return blockFactory.getMethods(server.type);
    };
    $scope.addAction = function(action){
    	Processes.addAction(link.id, process.id, action);
    	console.log(action);
    	$modalInstance.dismiss('sucess');
    }
    $scope.testAction =function(){
    	Processes.addAction(link.id, process.id, $scope.action);
        Processes.testAction($scope.action).success(function (result) {
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
