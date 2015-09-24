'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, $modal) {
      $scope.connector = {
          img_url: 'images/controls/connectorSmall.png',
          text: 'connectorSmall',
          on_click: function(){
            console.log("Hello there My friend");
          },
          on: false
        };
      $scope.pm_blocks = [
        {
          img_url: 'images/controls/Builder.png',
          text: 'Builder'
        },
        {
          img_url: 'images/controls/Cloud.png',
          text: 'Cloud'
        },
        {
          img_url: 'images/controls/CommandLine.png',
          text: 'CommandLine'
        },
        {
          img_url: 'images/controls/Database.png',
          text: 'Database'
        },
        {
          img_url: 'images/controls/FTP.png',
          text: 'FTP'
        },
        {
          img_url: 'images/controls/FileServer.png',
          text: 'FileServer'
        },
        {
          img_url: 'images/controls/Hosting.png',
          text: 'Hosting'
        },
        {
          img_url: 'images/controls/Hosting1.png',
          text: 'Hosting1'
        },
        {
          img_url: 'images/controls/Mail.png',
          text: 'Mail'
        },
        {
          img_url: 'images/controls/QA.png',
          text: 'QA'
        },
        {
          img_url: 'images/controls/SourceControl.png',
          text: 'SourceControl'
        },
        {
          img_url: 'images/controls/Stamper.png',
          text: 'Stamper'
        },
        {
          img_url: 'images/controls/TextEditor.png',
          text: 'TextEditor'
        },
        {
          img_url: 'images/controls/WebServer.png',
          text: 'WebServer'
        },
        {
          img_url: 'images/controls/aws.png',
          text: 'aws'
        },
        {
          img_url: 'images/controls/farm.png',
          text: 'farm'
        },
        {
          img_url: 'images/controls/pmAgent.png',
          text: 'pmAgent'
        }
      ];
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

    $scope.animationsEnabled = true;

    $scope.open = function (url, controller, size) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: url,
        controller: controller,
        size: size
      });
    }
  });
