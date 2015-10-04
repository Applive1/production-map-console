'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmVisualEditor
 * @description
 * # pmVisualEditor
 */
angular.module('productionMapConsoleApp')
  .directive('pmVisualEditor', function () {
  var controller = ['$scope', '$modal', function ($scope, $modal) {

    $scope.animationsEnabled = true;

    function open(url, controller, size) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: url,
        controller: controller,
        size: size
      });
    }

    $scope.open_process = function(){
      open('views/processes.html', 'ProcessesCtrl');
      console.log($scope.mapModel);
    }

		function init() {
      $scope.user_map = [
          {
            img_url: 'images/controls/Builder.png',
            text: 'Builder'
          },
          {
            img_url: 'images/controls/Cloud.png',
            text: 'Cloud'
          },
          {
            img_url: 'images/controls/farm.png',
            text: 'farm'
          },
          {
            img_url: 'images/controls/pmAgent.png',
            text: 'pmAgent'
          }
        ];
		}

		init();

    }];
    return {
      scope: {
        mapModel: '=mapModel'
      },
      templateUrl: 'scripts/directives/templates/pm-visual-designer.html',
      restrict: 'E',
      controller: controller
    };
  });
