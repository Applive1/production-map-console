'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
  	var URL = "http://localhost:1337/sysfile/execute";
  	$scope.map = {
  		name: '',
  		content: ''
  	}
  	$scope.button_text = 'execute';
  	$scope.btn_disabled = false;
  	$scope.execute_map = function(map){
    	$scope.button_text = 'executing...';
    	$scope.btn_disabled = true;
      console.log(map);
    	// business logic...
  		$http.post(URL, map)
			.success(function(result){
        $scope.button_text = 'execute';
        $scope.btn_disabled = false;
        console.log(result);
			})
			.error(function(err){
        console.log(err);
        $scope.button_text = 'execute';
        $scope.btn_disabled = false;
			});
  	}
  });
