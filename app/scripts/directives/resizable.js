'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:resizable
 * @description
 * # resizable
 */
angular.module('productionMapConsoleApp')
  .directive('resizable', function () {
    var resizableConfig = {
      handles: 'e',
      maxWidth: 600,
      minWidth: 200
    }
    return {
      restrict: 'A',
      scope: {
        callback: '&onResize'
      },
      link: function postLink(scope, elem) {
        elem.resizable(resizableConfig);
        elem.on('resize', function (event, ui) {
          if (scope.callback) scope.callback(event, ui);
        });
      }
    };
  });
