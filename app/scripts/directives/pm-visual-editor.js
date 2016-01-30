'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmVisualEditor
 * @description
 * # pmVisualEditor
 */
angular.module('productionMapConsoleApp')
  .directive('pmVisualEditor', function () {
  var controller = ['$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.animationsEnabled = true;

    function open(url, controller, size) {
        var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: url,
        controller: controller,
        size: size
      });
    }

    $scope.open_process = function(){
    }

    }];
    return {
      scope: {
        mapModel: '=mapModel',
        map: '=',
        mapNew:'=',
        mapLocked : '=',
        clickMode: '='
      },
      templateUrl: 'scripts/directives/templates/pm-visual-designer.html',
      restrict: 'E',
      controller: controller
    };
  });
