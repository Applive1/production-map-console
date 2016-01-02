'use strict';

/**
 * @ngdoc directive
 * @description
 * # yaml-viewer
 */
angular.module('productionMapConsoleApp')
  .directive('pmYamlViewer', function () {
    var controller = ['$scope', function ($scope) {

      function init() {
        var editor = CodeMirror.fromTextArea(document.getElementById("yaml-viewer"), {
          lineNumbers: true,
          lineWrapping: true,
          mode: 'text/x-yaml',
          keyMap: 'sublime',
          autoCloseBrackets: true,
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: 'monokai',
          tabSize: 2,
          gutters: ['CodeMirror-lint-markers'],
          lint: true,
          autofocus: true
        });

        editor.setSize($scope.width, $scope.height);
        $scope.$watch('content', function (newVal, oldVal) {
          if(!$scope.content){
            $scope.content = '';
          }
          editor.setValue($scope.content);
          editor.refresh();
        }, true);

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
        width: '=',
        height: '='
      },
      templateUrl: 'scripts/directives/templates/pm-yaml-viewer.html',
      restrict: 'E',
      controller: controller
    };
  });
