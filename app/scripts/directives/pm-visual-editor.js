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

		/*function init() {
            $scope.user_map = [
          {
            img_url: 'images/controls/CommandLine.png',
            text: 'CommandLine'
          },
          {
            img_url: 'images/controls/FileServer.png',
            text: 'FileServer'
          }
        ];
		}

		init();*/

    }];
    return {
      scope: {
        mapModel: '=mapModel',
        map: '='
      },
      templateUrl: 'scripts/directives/templates/pm-visual-designer.html',
      restrict: 'E',
      controller: controller
    };
  });
