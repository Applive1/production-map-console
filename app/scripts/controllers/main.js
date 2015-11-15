'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
    .controller('MainCtrl', function ($scope, $http, Messages, Popups, ProjectsService, AuthService, MapsService, Processes, $timeout, Socket, consts) {
        $scope.map = {
            mapView:{
                nodes: {},
                code: '',
                attributes: {}
            }
        }

    $scope.mapLoaded = false;

    $scope.attributes = [];
    $scope.rightEl = angular.element( document.querySelector( '#pm-main-content' ) );
      $scope.initalLeft = angular.element( document.querySelector( '#pm-left-section' ) ).width();
      $scope.containerWidth = $scope.initalLeft + $scope.rightEl.width();

      $scope.resizeRight = function(){
        var leftEl = angular.element( document.querySelector( '#pm-left-section' ) );
        var currentWidth = leftEl.width();
        $scope.rightEl.width($scope.containerWidth - currentWidth);
      }

    $scope.resizeLeft = function(){
      var leftEl = angular.element( document.querySelector( '#pm-attributes' ) );
      var currentWidth = leftEl.width();
      $scope.rightEl.width($scope.containerWidth - currentWidth);
    }
        $scope.messages = Messages.all();
        $scope.projects = [];
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
                if ($scope.projects.length === 0) {
                    $scope.createProject();
                }
            });

        // Initial code content...
        $scope.button_text = 'execute';
        $scope.btn_disabled = false;
        $scope.mapResult = 'waiting for result';

        $scope.execute_map = function (map) {
            if (map.versionIndex == map.versions.length - 1 || (map.versionIndex != map.versions.length - 1 && !map.isLocked))
                MapsService.saveMap(map).then(function (result) {
                    $scope.map.versions.push(result.data);
                    execute_map(map, false);
                });
            else if (map.isLocked) {
                execute_map(map, false);
            }
        };

        $scope.resume_map = function (map) {
            execute_map(map, true);
        };

        var execute_map = function (map, isResume) {
            $scope.button_text = 'executing...';
            $scope.btn_disabled = true;
            console.log(map);
            // business logic...
            var success = function (result) {
                    $scope.button_text = 'execute';
                    $scope.btn_disabled = false;
                    console.log(result);
                    Messages.add(result);
                    $scope.map.versions[$scope.map.versionIndex].status = consts.MapRunStatuses.Done;
                    map.isLocked = false;
                },
                error = function (err) {
                    console.log(err);
                    $scope.button_text = 'execute';
                    $scope.btn_disabled = false;
                    $scope.map.versions[$scope.map.versionIndex].status = consts.MapRunStatuses.Failed;
                    map.isLocked = true;
                };

            if (!isResume)
                MapsService.executeMap(map)
                    .success(success)
                    .error(error);
            else
                MapsService.resumeMap(map)
                    .success(success)
                    .error(error);

            $scope.updateStatus(consts.MapRunStatuses.Running);

            map.isLocked = true;
        };

        $scope.changeMode = function (mode) {
            $scope.block_mode = {mode: mode};
        };

        $scope.clearMode = function () {
            $scope.block_mode = { mode: '' };
        }

        $scope.showMessage = function (msg) {
            Popups.open({
                templateUrl: 'views/message.html',
                controller: 'MessagesCtrl',
                resolve: { message: msg }
            });
        }

        $scope.mapStructures = {};

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
                        }, function (versionIndex) {
                            $scope.loadMapVersion(versionIndex);
                        });
                    }
                },
                ShowMapAttributs: {
                    type: "map",
                    "label": "show attributes",
                    "action": function (obj) {
                        var mapStruct = node.original.mapView;
                        Popups.open({
                            templateUrl: 'views/Popups/map_attributes.html',
                            controller: 'mapAttributesCtrl',
                            resolve: { map: mapStruct}
                        }, function (map) {
                            node.original.mapView.attributes = map.attributes;
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
                                    if (!$scope.projects[i].maps) {
                                        $scope.projects[i].maps = [];
                                    }
                                    $scope.projects[i].maps.push(map);
                                    if (!$scope.projects[i].children) {
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
            if (data.node.type == 'default' || (($scope.map && $scope.map.id == data.node.original.id) && ($scope.map.versionIndex == $scope.map.versions.length - 1)))
                return;

            $scope.map = data.node.original;

            $scope.loadMapVersion($scope.map.versions.length - 1);
        }

        $scope.loadMapVersion = function (index) {
            $scope.attributes = [];
            $scope.map.mapView = angular.copy($scope.map.structure);
            $scope.map.versionIndex = index;
            for (var i = 0; i <= index; i++) {
                jsonpatch.apply($scope.map.mapView, $scope.map.versions[i].patches);
            }

            Processes.set($scope.map.mapView);

            $timeout(function () {
                $scope.$digest();
            });

            for(var key in $scope.map.mapView.attributes){
              $scope.attributes.push({name: key, value: $scope.map.mapView.attributes[key]});
            }

            $scope.mapLoaded = true;
        }

        $scope.saveMap = function (map) {
            MapsService.saveMap(map).then(function (result) {
                console.log(result);
            });
        }

        Socket.on('update', function (msg) {
            Messages.add(msg);
            console.log("***** got push *****");
            console.log(msg);
            console.log("***** got push *****");
        });

        $scope.checkName = function(name, attribute){
            if(!name || name === '' || name === 'empty'){
                return "name can't be empty!";
            }
            if(!attribute || attribute.name !== name){
                for(var i=0; i < $scope.attributes.length; i++){
                    var attr = $scope.attributes[i];
                    if(attr.name === name){
                        return "attribute name allready in use!";
                    }
                }
            }
            return true;
        }

        $scope.checkValue = function(value){
            if(!value || value === '' || value === 'empty'){
                return "value can't be empty";
            }
        }

        $scope.saveAttribute = function(attr){
            if(!$scope.map.mapView.attributes){
                $scope.map.mapView.attributes = {};
            }
            $scope.map.mapView.attributes[attr.name] = attr.value;
        }

        $scope.addAttribute = function() {
            $scope.inserted = {
                name: '',
                value: ''
            };
            $scope.attributes.push($scope.inserted);
        };

        $scope.removeAttribute = function(index) {
            var attr = $scope.attributes[index];

            $scope.attributes.splice(index, 1);

            if(!$scope.map.mapView.attributes){
                $scope.map.mapView.attributes = {};
            }
            if($scope.map.mapView.attributes.hasOwnProperty(attr.name)){
                delete $scope.map.mapView.attributes[attr.name];
            }
        };

        $scope.updateStatus = function(status){
            MapsService.ChangeMapRunStatus($scope.map, status,function(){
                $scope.map.versions[$scope.map.versionIndex].status = status;
            });
        }
    })
;
