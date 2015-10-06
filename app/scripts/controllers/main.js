'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
    .controller('MainCtrl', function ($scope, $http, $timeout, $modal) {
        $scope.map = {
            name: "example_map.xml",
            active: true,
            disabled: false,
            content: '',
            user_map: [
                {
                    img_url: 'images/controls/CommandLine.png',
                    text: 'CommandLine'
                },
                {
                    img_url: 'images/controls/FileServer.png',
                    text: 'FileServer'
                }
            ]
        };
        $scope.connector = {
            img_url: 'images/controls/connectorSmall.png',
            text: 'connectorSmall',
            on_click: function () {
                console.log("Hello there My friend");
            },
            on: false
        };
        $scope.pm_blocks = [
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
                img_url: 'images/controls/farm.png',
                text: 'farm'
            },
            {
                img_url: 'images/controls/pmAgent.png',
                text: 'pmAgent'
            }
        ];
        var URL = "http://localhost:1337/sysfile/execute";
        $scope.cmOption = {
            lineNumbers: true,
            indentWithTabs: true,
            mode: 'xml'
        }

        // Initial code content...
        $scope.button_text = 'execute';
        $scope.btn_disabled = false;
        $scope.execute_map = function (map) {
            $scope.button_text = 'executing...';
            $scope.btn_disabled = true;
            console.log(map);
            // business logic...
            $http.post(URL, map)
                .success(function (result) {
                    $scope.button_text = 'execute';
                    $scope.btn_disabled = false;
                    console.log(result);
                })
                .error(function (err) {
                    console.log(err);
                    $scope.button_text = 'execute';
                    $scope.btn_disabled = false;
                });
        }

    });
