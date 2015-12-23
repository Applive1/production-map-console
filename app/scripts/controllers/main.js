'use strict';

/**
 * @ngdoc function
 * @name productionMapConsoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productionMapConsoleApp
 */
angular.module('productionMapConsoleApp')
  .controller('MainCtrl', function ($scope, $http, Messages, Popups, ProjectsService, AuthService, MapsService, Processes, $timeout, Socket, consts, blockFactory) {

    $scope.mapLoaded = false;
    $scope.attributes = [];

    /* Listen on the ctrl-s event and save map at server! */
    document.addEventListener("keydown", function(e) {
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        // Process event...
        $scope.saveMap($scope.map);
        //angular.injector(['ng', 'productionMapConsoleApp']).get("MapsService").saveMap($scope.map);
      }
    }, false);

    $scope.init = function () {
      $scope.mainContainerEl = angular.element(document.querySelector('#mainContent'));
      $scope.footerContainerEl = angular.element(document.querySelector('#messages'));

      $scope.mapsListEl = angular.element(document.querySelector('#pm-maps'));
      $scope.mapsItemsListEl = angular.element(document.querySelector('#pm-map-items'));

      $scope.mainEl = angular.element(document.querySelector('#pm-main-content'));
      $scope.rightEl = angular.element(document.querySelector('#pm-attributes'));
      $scope.leftEl = angular.element(document.querySelector('#pm-left-section'));

      $scope.leftContainerWidth = parseInt($scope.leftEl.width() + $scope.mainEl.width());
      $scope.rightContainerWidth = parseInt($scope.rightEl.width() + $scope.mainEl.width());
      $scope.pageHeight = $scope.mainContainerEl.height() + $scope.footerContainerEl.height();

      $scope.resizeRight = function () {
        $scope.mainEl.width($scope.leftContainerWidth - $scope.leftEl.width());
        $scope.rightContainerWidth = parseInt($scope.rightEl.width() + $scope.mainEl.width());
      }

      $scope.resizeLeft = function () {
        $scope.rightEl.width($scope.rightContainerWidth - $scope.mainEl.width());
        $scope.leftContainerWidth = parseInt($scope.leftEl.width() + $scope.mainEl.width());
      }

      $scope.resizeHeight = function () {
        $scope.mainContainerEl.height($scope.pageHeight - $scope.footerContainerEl.height());
      }

      $scope.resizeMapItems = function () {
        $scope.mapsListEl.height($scope.mainContainerEl.height() - $scope.mapsItemsListEl.height());
      }
    }

    $scope.messages = Messages.all();
    $scope.projects = [];
    $scope.block_mode = {mode: '', drop: false};
    $scope.pm_blocks = [];

    blockFactory.all().then(function (res) {
      $scope.pm_blocks = res.blocks;
    });

    $scope.createProject = function () {
      Popups.open({
        templateUrl: 'views/Popups/CreateProject.html',
        controller: 'ProjectsAndMapsCtrl',
        resolve: {data: {isMap: false}}
      }, function (project) {
        $scope.projects.push(project);
      });
    }

    $scope.addAgent = function () {
      Popups.open({
        templateUrl: 'views/Popups/installAgent.html',
        controller: 'installAgentCtrl'
      }, function (block) {
        $scope.pm_blocks.push({
          img_url: block.imgUrl,
          text: block.type
        });
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
          map.versionIndex = $scope.map.versions.length - 1;
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
      $scope.block_mode = {mode: mode, drop: false};
    };

    $scope.clearMode = function () {
      $scope.block_mode = {mode: '', drop: false};
    }

    $scope.showMessage = function (msg) {
      Popups.open({
        templateUrl: 'views/message.html',
        controller: 'MessagesCtrl',
        resolve: {message: msg}
      });
    }

    $scope.showAdmin = function () {
      Popups.open({
        templateUrl: 'views/Popups/AdminPanel.html',
        controller: 'AdminCtrl',
        resolve: {
          projects: function () {
            return $scope.projects;
          }
        }
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
              resolve: {map: node.original}
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
              resolve: {map: mapStruct}
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
              resolve: {
                data: {
                  isMap: true,
                  project: node
                }
              }
            }, function (map) {
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
      check_while_dragging: true,
      is_draggable: function (data) {
        return data[0].type != 'default';
      },
      copy: false
    };
    $scope.jsTreeTypes = {
      map: {
        "icon": "fa fa-map"
      }
    }
    $scope.jsTreeCore = {
      check_callback: function (operation, node, node_parent, node_position, more) {
        if (operation === "move_node") {
          if (node_parent.type=='default' && event.type.toLowerCase()=='mouseup' && node.parent != node_parent.id){
            node.original.Project = node_parent.original.id;

            MapsService.updateMapProject(node.original.id, node_parent.original.id).then(function(){
              if ($scope.map && $scope.map.id==node.original.id)
                $scope.map.Project = node_parent.original.id;
            });
          }
          return node_parent.type=='default'; //only allow dropping inside nodes of type 'Parent'
        }
        return true;  //allow all other operations
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

      for (var key in $scope.map.mapView.attributes) {
        $scope.attributes.push({name: key, value: $scope.map.mapView.attributes[key]});
      }

      $scope.mapLoaded = true;
    }

    $scope.saveMap = function (map) {
      $scope.isSaving = true;
      MapsService.saveMap(map).then(function (result) {
        $scope.isSaving = false;
        console.log(result);
      });
    }

    Socket.on('update', function (msg) {
      Messages.add(msg);
      console.log("***** got push *****");
      console.log(msg);
      console.log("***** got push *****");
    });

    $scope.checkName = function (name, attribute) {
      if (!name || name === '' || name === 'empty') {
        return "name can't be empty!";
      }
      if (!attribute || attribute.name !== name) {
        for (var i = 0; i < $scope.attributes.length; i++) {
          var attr = $scope.attributes[i];
          if (attr.name === name) {
            return "attribute name allready in use!";
          }
        }
      }
      return true;
    }

    $scope.checkValue = function (value) {
      if (!value || value === '' || value === 'empty') {
        return "value can't be empty";
      }
    }

    $scope.saveAttribute = function (attr) {
      if (!$scope.map.mapView.attributes) {
        $scope.map.mapView.attributes = {};
      }
      $scope.map.mapView.attributes[attr.name] = attr.value;
    }

    $scope.addAttribute = function () {
      $scope.inserted = {
        name: '',
        value: ''
      };
      $scope.attributes.push($scope.inserted);
    };

    $scope.removeAttribute = function (index) {
      var attr = $scope.attributes[index];

      $scope.attributes.splice(index, 1);

      if (!$scope.map.mapView.attributes) {
        $scope.map.mapView.attributes = {};
      }
      if ($scope.map.mapView.attributes.hasOwnProperty(attr.name)) {
        delete $scope.map.mapView.attributes[attr.name];
      }
    };

    $scope.updateStatus = function (status) {
      MapsService.ChangeMapRunStatus($scope.map, status, function () {
        $scope.map.versions[$scope.map.versionIndex].status = status;
      });
    }

    $scope.dropElement = function (event) {
      $scope.block_mode.drop = event;
    }
  })
;
