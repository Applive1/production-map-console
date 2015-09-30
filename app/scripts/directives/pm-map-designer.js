'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmMapDesigner
 * @description
 * # pmMapDesigner
 */

angular.module('productionMapConsoleApp')
  .directive('pmMapDesigner', function () {

  	var controller = ['$scope', function ($scope) {

		function init() {
			console.log("init controller");
			$scope.designer_active = true;
			$scope.show_designer = function(){
				$scope.code_editor_active = false;
				$scope.xml_editor_active = false;
				$scope.designer_active = true;
			}
			$scope.show_xml_editor = function(){
				$scope.designer_active = false;
				$scope.code_editor_active = false;
				$scope.xml_editor_active = true;
			}
			$scope.show_code_editor = function(){
				$scope.designer_active = false;
				$scope.xml_editor_active = false;
				$scope.code_editor_active = true;
			}
		}

		init();

    }];

    return {
      scope: {},
      templateUrl: 'scripts/directives/templates/pm-map-designer.html',
      restrict: 'E',
      controller: controller
    };
  });
