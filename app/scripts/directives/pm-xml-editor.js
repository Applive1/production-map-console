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
                    gutters: ['CodeMirror-lint-markers'],
                    lint: true,
                    autofocus: true
                });
                editor.setSize($scope.width, $scope.height);
                $scope.markup.cm = editor;
                $scope.$watch('content', function (newVal, oldVal) {
                    if ($scope.jsonChange) {
                        $scope.jsonChange = false;
                        return;
                    }
                    $scope.contentChange = true;
                    var map = {
                        nodes: newVal.nodes,
                        links: newVal.links,
                        attributes: newVal.attributes
                    };
                    $scope.map_json = JSON.stringify(map, null, 2);
                    editor.setValue($scope.map_json);
                    editor.refresh();
                }, true);
                $scope.$watch('map_json', function (newVal, oldVal) {
                    if ($scope.contentChange) {
                        $scope.contentChange = false;
                        return;
                    }
                    $scope.jsonChange = true;
                    try {
                        var map = JSON.parse(newVal);
                        $scope.content.nodes = map.nodes;
                        $scope.content.links = map.links;
                        $scope.content.attributes = map.attributes;
                        editor.refresh();
                    } catch (e) {
                        console.log(e);
                    }
                });
                editor.on('change', function (instance) {
                    var newValue = instance.getValue();
                    if (newValue !== $scope.map_json) {
                        $scope.map_json = newValue;
                        editor.refresh();
                    }
                });
                $scope.cmeditor = editor;
            }

            init();
            $scope.$on('refreshCM', function(e){
                setTimeout(function(){
                    $scope.cmeditor.refresh();
                }, 100);
            });
        }];
        return {
            scope: {
                content: '=content',
                markup: '=',
                width: '=',
                height: '='
            },
            templateUrl: 'scripts/directives/templates/pm-xml-editor.html',
            restrict: 'E',
            controller: controller
        };
    });
