'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmCodeEditor
 * @description
 * # pmCodeEditor
 */
angular.module('productionMapConsoleApp')
  .directive('pmCodeEditor', function () {
    return {
      templateUrl: 'scripts/directives/templates/pm-code-editor.html',
      restrict: 'E',
      scope: {}
    };
  });
