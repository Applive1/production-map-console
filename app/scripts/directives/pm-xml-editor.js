'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmXmlEditor
 * @description
 * # pmXmlEditor
 */
angular.module('productionMapConsoleApp')
  .directive('pmXmlEditor', function () {
  	var controller = ['$scope', function ($scope) {

		function init() {
		}

		init();

    }];
    return {
      scope: {},
      templateUrl: 'scripts/directives/templates/pm-xml-editor.html',
      restrict: 'E',
      controller: controller
    };
  });
