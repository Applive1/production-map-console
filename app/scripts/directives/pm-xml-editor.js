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
      console.log("------------");
      console.log($scope.content);
      console.log("------------");
		}

		init();

    }];
    return {
      scope: {
        content: '=content'
      },
      templateUrl: 'scripts/directives/templates/pm-xml-editor.html',
      restrict: 'E',
      controller: controller
    };
  });
