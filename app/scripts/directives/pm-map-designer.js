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
                console.log("init controller");
                $scope.viewMode = 1; //Set to designer
                $scope.markup = {
                    cm: ''
                };
            }

            init();
        }];

        return {
            scope: {
                map: "=map",
                clickMode: '='
            },
            templateUrl: 'scripts/directives/templates/pm-map-designer.html',
            restrict: 'E',
            controller: controller
        };
    });
