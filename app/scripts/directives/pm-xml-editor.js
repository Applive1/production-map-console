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
      $scope.jsonChange = false;
      $scope.contentChange = false;
      $scope.$watch('content', function(newVal, oldVal){
        if($scope.jsonChange){
          $scope.jsonChange = false;
          return;
        }
        $scope.contentChange = true;
        var map = {
          nodes: newVal.nodes,
          links: newVal.links
        }
        $scope.map_json = JSON.stringify(map, null, 2);
      },true);
      $scope.$watch('map_json', function(newVal, oldVal){
        if($scope.contentChange){
          $scope.contentChange = false;
          return;
        }
        $scope.jsonChange = true;
        var map = JSON.parse(newVal);
        $scope.content.nodes = map.nodes;
        $scope.content.links = map.links;
      });
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
