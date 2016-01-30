'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:pmMapDesigner
 * @description
 * # pmMapDesigner
 */

angular.module('productionMapConsoleApp')
    .directive('pmMapDesigner', function () {

        var controller = ['$scope', function ($scope) {
            function init() {
                $scope.viewMode = 1; //Set to designer
                $scope.markup = {
                    cm: ''
                };
                $scope.code = {
                    cm: ''
                };
            }

            $scope.setCode = function(){
                $scope.viewMode = 3;
                $scope.$broadcast('refreshCM');
            };
            $scope.setMarkup = function(){
                $scope.viewMode = 2;
                $scope.$broadcast('refreshCM');
            };
            $scope.setLog = function(){
                $scope.viewMode = 4;
                $scope.$broadcast('refreshCM');
            };

            init();
        }];

        return {
            scope: {
                clickMode: '=',
                map:'=',
                viewMode : '='
            },
            templateUrl: 'scripts/directives/templates/pm-map-designer.html',
            restrict: 'E',
            controller: controller
        };
    });
