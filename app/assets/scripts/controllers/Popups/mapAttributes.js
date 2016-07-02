'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:PmblocksCtrl
 * @description
 * # PmblocksCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('mapAttributesCtrl',['$scope', '$uibModalInstance', 'map',function ($scope, $uibModalInstance, map) {
  	$scope.map = map;
  	$scope.attributes = [];
    console.log("attributes");
    for(var key in map.attributes){
      console.log(map.attributes[key]);
      $scope.attributes.push({name: key, value: map.attributes[key].value, type: map.attributes[key].type});
    }
  	$scope.save = function(){
  		var attrs = {};
  		for (var i = $scope.attributes.length - 1; i >= 0; i--) {
  			var attr = $scope.attributes[i];
  			attrs[attr.name] = attr.value;
  		};
  		$scope.map.attributes = angular.copy(attrs);
  		console.log($scope.map.attributes);
  		$uibModalInstance.close($scope.map);
  	}
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
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
