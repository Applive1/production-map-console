'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
    .controller('MainCtrl', function ($scope, $http, Messages, Popups, ProjectsService, AuthService, MapsService, Processes) {
        $scope.messages = Messages.all();
        $scope.projects = [];
        /*$scope.map = {
         name: "example_map",
         active: true,
         disabled: false,
         content: '',
         nodes: {},
         links: [],
         code: ''
         };*/
        $scope.block_mode = '';
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


        $scope.createProject = function () {
            Popups.open({
                templateUrl: 'views/Popups/CreateProject.html',
                controller: 'ProjectsAndMapsCtrl',
                resolve: { data: {isMap: false}}
            }, function (project) {
                $scope.projects.push(project);
            });
        }

        if (AuthService.currentUser)
            ProjectsService.getJstreeProjectsByUser(AuthService.currentUser.id).then(function (result) {
                $scope.projects = result.data;
                if($scope.projects.length === 0){
                    $scope.createProject();
                }
            });

        // Initial code content...
        $scope.button_text = 'execute';
        $scope.btn_disabled = false;
        $scope.mapResult = 'waiting for result';
        $scope.execute_map = function (map) {
            map = map.structure;
            $scope.button_text = 'executing...';
            $scope.btn_disabled = true;
            console.log(map);
            // business logic...
            MapsService.executeMap(map)
                .success(function (result) {
                    $scope.button_text = 'execute';
                    $scope.btn_disabled = false;
                    console.log(result);
                    Messages.add(result);
                })
                .error(function (err) {
                    console.log(err);
                    $scope.button_text = 'execute';
                    $scope.btn_disabled = false;
                });
            MapsService.saveMap(map).then(function (result) {
                $scope.map.versions.push(result.data);
            });
        };
        $scope.changeMode = function (mode) {
            $scope.block_mode = {mode: mode};
            console.log($scope.block_mode);
        };

        $scope.showMessage = function (msg) {
            Popups.open({
                templateUrl: 'views/message.html',
                controller: 'MessagesCtrl',
                resolve: { message: msg }
            });
        }

        $scope.jsTreeContextMenu = function (node) {
            var items = {
                ShowMapVersions: {
                    type: "map",
                    "label": "Show Versions",
                    "action": function (obj) {
                        Popups.open({
                            templateUrl: 'views/Popups/ShowMapVersions.html',
                            controller: 'MapVersionsCtrl',
                            resolve: { map: node.original}
                        });
                    }
                },
                DeleteProject: {
                    type: "default",
                    "label": "Delete Project",
                    "action": function (obj) {
                    }
                },
                AddMap: {
                    type: "default",
                    "label": "Add Map",
                    "action": function () {
                        Popups.open({
                            templateUrl: 'views/Popups/CreateProject.html',
                            controller: 'ProjectsAndMapsCtrl',
                            resolve: { data: {
                                isMap: true,
                                project: node}
                            }}, function (map) {
                            for (var i = 0, length = $scope.projects.length; i < length; i++) {
                                if (node.id == $scope.projects[i].id) {
                                    if(!$scope.projects[i].maps){
                                        $scope.projects[i].maps = [];
                                    }
                                    $scope.projects[i].maps.push(map);
                                    if(!$scope.projects[i].children){
                                        $scope.projects[i].children = [];
                                    }
                                    $scope.projects[i].children.push(map);
                                    break;
                                }
                            }
                        });
                    }
                }
            }

            for (var key in items) {
                if (items[key].type != node.type)
                    delete items[key];
            }

            return items;
        };
        $scope.jsTreeDragConfig = {
            is_draggable: function (obj) {
                if (obj[0].parents.length < 2)
                    return false;
            }
        }
        $scope.jsTreeTypes = {
            map: {
                "icon": "fa fa-map"
            }
        }

        $scope.onTreeItemClick = function (e, data) {
            if (data.node.type == 'default')
                return;

            $scope.map = data.node.original;
            console.log($scope.map);
            $scope.map.versions.forEach(function (version) {
                jsonpatch.apply($scope.map.structure, version.patches);
            })

            Processes.set($scope.map.structure);
            $scope.$digest();
        }

        $scope.saveMap = function(map){
            MapsService.saveMap(map).then(function (result) {
                console.log(result);
            });
        }

        io.socket.on('update', function (msg){
            Messages.add(msg);
            console.log("***** got push *****");
            console.log(msg);
            console.log("***** got push *****");
        });
    })
;
