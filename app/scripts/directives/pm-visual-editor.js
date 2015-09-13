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
            text: 'Builder'
          },
          {
            img_url: 'images/controls/Cloud.png',
            text: 'Cloud'
          },
          {
            img_url: 'images/controls/CommandLine.png',
            text: 'CommandLine'
          },
          {
            img_url: 'images/controls/Database.png',
            text: 'Database'
          },
          {
            img_url: 'images/controls/FTP.png',
            text: 'FTP'
          },
          {
            img_url: 'images/controls/FileServer.png',
            text: 'FileServer'
          },
          {
            img_url: 'images/controls/Hosting.png',
            text: 'Hosting'
          },
          {
            img_url: 'images/controls/Hosting1.png',
            text: 'Hosting1'
          },
          {
            img_url: 'images/controls/Mail.png',
            text: 'Mail'
          },
          {
            img_url: 'images/controls/QA.png',
            text: 'QA'
          },
          {
            img_url: 'images/controls/SourceControl.png',
            text: 'SourceControl'
          },
          {
            img_url: 'images/controls/Stamper.png',
            text: 'Stamper'
          },
          {
            img_url: 'images/controls/TextEditor.png',
            text: 'TextEditor'
          },
          {
            img_url: 'images/controls/WebServer.png',
            text: 'WebServer'
          },
          {
            img_url: 'images/controls/aws.png',
            text: 'aws'
          },
          {
            img_url: 'images/controls/connectorSmall.png',
            text: 'connectorSmall'
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
      scope: {},
      templateUrl: 'scripts/directives/templates/pm-visual-designer.html',
      restrict: 'E',
      controller: controller
    };
  });
