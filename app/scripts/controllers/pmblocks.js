'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:PmblocksCtrl
 * @description
 * # PmblocksCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('PmblocksCtrl',function ($scope, $modalInstance, server) {
  	$scope.server = server;
  	$scope.attributes = [];
  	for(var key in server.attributes){
  		$scope.attributes.push({name: key, value: server.attributes[key]});
  	};
  	$scope.save = function(){
  		var attrs = {};
  		for (var i = $scope.attributes.length - 1; i >= 0; i--) {
  			var attr = $scope.attributes[i];
  			attrs[attr.name] = attr.value;
  		};
  		$scope.server.attributes = angular.copy(attrs);
  		console.log($scope.server.attributes);
  		$modalInstance.close($scope.server);
  	}
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.addAttribute = function() {
	    $scope.inserted = {
	    	name: '',
	    	value: ''
	    };
		$scope.attributes.push($scope.inserted);
	};

	$scope.removeAttribute = function(index) {
	    $scope.attributes.splice(index, 1);
	 };

  });