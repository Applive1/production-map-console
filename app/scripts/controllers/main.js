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
    $scope.cmOption = {
      lineNumbers: true,
      indentWithTabs: true,
      mode: 'xml'
    }

    // Initial code content...
    $scope.cmModel = '<!-- map xml scheme -->\n' +
      '(define (double x)\n\t(* x x))\n\n\n' +
      '<!-- XML code in here. -->\n' +
      '<root>\n\t<foo>\n\t</foo>\n\t<bar/>\n</root>\n\n\n' +
      '// Javascript code in here.\n' +
      'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';

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
