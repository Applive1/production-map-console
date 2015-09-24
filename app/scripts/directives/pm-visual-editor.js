'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmVisualEditor
 * @description
 * # pmVisualEditor
 */
angular.module('productionMapConsoleApp')
  .directive('pmVisualEditor', function () {
    var controller = ['$scope', function ($scope) {

		function init() {
      $scope.user_map = [
          {
            img_url: 'images/controls/Builder.png',
            text: 'Builder',
            on_dbclick: function(){
              console.log("clicked")
            }
          },
          {
            img_url: 'images/controls/Cloud.png',
            text: 'Cloud',
            on_dbclick: function(){
              console.log("clicked")
            }
          },
          {
            img_url: 'images/controls/farm.png',
            text: 'farm',
            on_dbclick: function(){
              console.log("clicked")
            }
          },
          {
            img_url: 'images/controls/pmAgent.png',
            text: 'pmAgent',
            on_dbclick: function(){
              console.log("clicked")
            }
          }
        ];
		}

		init();

    }];
    return {
      scope: {
        connector_mode: '=connectorMode'
      },
      templateUrl: 'scripts/directives/templates/pm-visual-designer.html',
      restrict: 'E',
      controller: controller
    };
  });
