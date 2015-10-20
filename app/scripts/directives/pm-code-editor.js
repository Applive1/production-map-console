'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmCodeEditor
 * @description
 * # pmCodeEditor
 */
angular.module('productionMapConsoleApp')
  .directive('pmCodeEditor', function () {
	var controller = ['$scope', function ($scope) {

		function init() {
			$scope.code = $scope.map.code;
			var orig = CodeMirror.hint.javascript;
			CodeMirror.hint.javascript = function(cm) {
				var inner = orig(cm) || {from: cm.getCursor(), to: cm.getCursor(), list: []};
			 	console.log(inner);
			 	angular.forEach($scope.map.nodes, function(node) {
					inner.list.push(node.name);
				});
				console.log(inner);
			  	return inner;
			};
		}

		init();

    }];
    return {
      scope: {
      	map: '='
      },
      templateUrl: 'scripts/directives/templates/pm-code-editor.html',
      restrict: 'E',
      controller: controller
    };
  });
