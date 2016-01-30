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
      var localViewMode = 2;

      function init() {
        $scope.jsonChange = false;
        $scope.contentChange = false;
        var editor = CodeMirror.fromTextArea(document.getElementById("markup"), {
            lineNumbers: true,
            lineWrapping: true,
            mode: 'application/json',
            extraKeys: {'Ctrl-Space': 'autocomplete'},
            keyMap: 'sublime',
            autoCloseBrackets: true,
            matchBrackets: true,
            showCursorWhenSelecting: true,
            theme: 'monokai',
            tabSize: 2,
            foldGutter: true,
            gutters: ['CodeMirror-lint-markers', 'CodeMirror-foldgutter'],
            lint: true,
            autofocus: true
          }),
          updateEditor = function (newVal) {
            var map = {
              nodes: newVal.nodes,
              links: newVal.links,
              attributes: newVal.attributes
            };
            $scope.map_json = JSON.stringify(map, null, 2);
            editor.setValue($scope.map_json);
            editor.refresh();
          };
        editor.setSize('100%', $scope.height);
        $scope.markup.cm = editor;
        $scope.$watch('content', function (newVal, oldVal) {
          /*if ($scope.jsonChange) {
           $scope.jsonChange = false;
           return;
           }
           $scope.contentChange = true;*/
          if ($scope.viewMode == localViewMode)
            return;

          updateEditor(newVal);
        }, true);
        $scope.$watchGroup(['map.id', 'map.versionIndex'], function (newValues, oldValues, scope) {
          updateEditor($scope.content);
        });
        editor.on('change', function (instance) {
          var newValue = instance.getValue();
          if (newValue !== $scope.map_json) {
            $scope.map_json = newValue;

            if ($scope.viewMode != localViewMode) {// $scope.contentChange) {
              //$scope.contentChange = false;
              return;
            }
            //$scope.jsonChange = true;
            try {
              var map = JSON.parse($scope.map_json);
              $scope.content.nodes = map.nodes;
              $scope.content.links = map.links;
              $scope.content.attributes = map.attributes;
              var tempContent = JSON.parse($scope.content.content);
              var newNodes = tempContent.nodes.filter(function (node) {
                for (key in $scope.content.nodes) {
                  if ($scope.content.nodes[key].id == node.id)
                    return true;
                }
                return false;
              });
              var newLinks = tempContent.links.filter(function (link) {
                for (var i = 0, length = $scope.content.links.length; i < length; i++) {
                  if ($scope.content.links[i].id == link.id)
                    return true;
                }
                return false;
              });
              $scope.content.content = JSON.stringify({nodes: newNodes, links: newLinks});

              editor.refresh();
              $scope.$apply();
            } catch (e) {
              console.log(e);
            }
          }
        });
        $scope.cmeditor = editor;
      }

      init();
      $scope.$on('refreshCM', function (e) {
        setTimeout(function () {
          $scope.cmeditor.refresh();
        }, 100);
      });
    }];
    return {
      scope: {
        content: '=content',
        markup: '=',
        width: '=',
        viewMode: '=',
        height: '=',
        map:'='
      },
      templateUrl: 'scripts/directives/templates/pm-xml-editor.html',
      restrict: 'E',
      controller: controller
    };
  });
