'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:PmblocksCtrl
 * @description
 * # PmblocksCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('mapAttributesCtrl',['$scope', '$modalInstance', 'map',function ($scope, $modalInstance, map) {
  	$scope.map = map;
  	$scope.attributes = [];
    for(var key in map.attributes){
      $scope.attributes.push({name: key, value: map.attributes[key]});
    }
  	$scope.save = function(){
  		var attrs = {};
  		for (var i = $scope.attributes.length - 1; i >= 0; i--) {
  			var attr = $scope.attributes[i];
  			attrs[attr.name] = attr.value;
  		};
  		$scope.map.attributes = angular.copy(attrs);
  		console.log($scope.map.attributes);
  		$modalInstance.close($scope.map);
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

  }]);
