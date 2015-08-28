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
  	var URL = "http://localhost:3100";
  	$scope.map = {
  		name: '',
  		data: ''
  	}
  	$scope.button_text = 'execute';
  	$scope.btn_disabled = false;
  	$scope.execute_map = function(my_button, map){
    	$scope.button_text = 'executing...';
    	$scope.btn_disabled = true;
    	// business logic...
    	$timeout(function(){
    		$scope.button_text = 'execute';
    		$scope.btn_disabled = false;
    	},5000);
  		$http.post(URL, map)
			.success(function(result){

			})
			.error(function(err){

			});
  	}
  });
