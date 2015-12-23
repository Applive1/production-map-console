'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:dropFiles
 * @description
 * # dropFiles
 */
angular.module('productionMapConsoleApp')
  .directive('modalDialog', function(){
    return {
      restrict: 'C',
      link: function(scope, element) {
        $(element).draggable();
      }
    }
  });
