'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:scHover
 * @description
 * # scHover
 */
angular.module('productionMapConsoleApp')
  .directive('scHover', function($timeout) {
        return {
            link: function(scope, element, attrs, modelCtrl) {
                    var inTimeout = false;
                    var hoverDelay = parseInt(attrs.scHoverDelay, 10) | 1000;

                    element.on('mouseover', function () {
                      inTimeout = true;
                      $timeout(function () {
                        if (inTimeout) {
                          scope.$eval(attrs.scHover);
                          inTimeout = false;
                        }
                      }, hoverDelay);
                    });

                    element.on('mouseleave', function () {
                      inTimeout = false;
                      scope.$apply(function () {
                        scope.$eval(attrs.scHoverEnd);
                      });
                    });
            }
        }
    });
