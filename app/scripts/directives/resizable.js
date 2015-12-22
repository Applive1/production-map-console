'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:resizable
 * @description
 * # resizable
 */
angular.module('productionMapConsoleApp')
  .directive('resizable', function () {
    return {
      restrict: 'A',
      scope: {
        callback: '&onResize',
        handles:'@side'
      },
      link: function postLink(scope, elem) {
        elem.resizable({
            handles: scope.handles,
            maxWidth: 1000,
            minWidth: 200
        });
        elem.on('resize', function (event, ui) {
          if (scope.handles.indexOf('n') != -1) $(elem).css('top','auto');
          if (scope.callback) scope.callback(event, ui);
        });
      }
    };
  });
