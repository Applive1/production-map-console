'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:dacCreator
 * @description
 * # dacCreator
 */
angular.module('productionMapConsoleApp').directive('dacCreator', function () {
  return {
    scope: {
      height: '=height',
      width: '=width',
      gridSize: '=',
      clickMode: '=',
      viewMode: '=',
      map: '='
    },
    templateUrl: 'scripts/directives/templates/dac-creator.html',
    restrict: 'E',
    controller: ['$scope', 'Popups', 'blockFactory', function ($scope, Popups, blockFactory) {

      $scope.graph = [];
      var localViewMode = 1;

      function updateModel() {
        // Save the cells in arrays
        var elementos = $scope.graph.getElements();
        var links = $scope.graph.getLinks();

        var expElementos = [];
        var expLinks = [];

        for (var i = 0; i < elementos.length; i++) {
          expElementos.push(elementos[i]);
        }

        for (var i = 0; i < links.length; i++) {
          expLinks.push(links[i]);
        }

        $scope.map.mapView.content = angular.toJson({
          nodes: expElementos,
          links: expLinks
        });
      }

      function isLinkInvalid(link) {
        if (link.prop('source/id') && link.prop('target/id')) {
          if ($scope.tmp_obj)
            return (link.prop('target/id') == $scope.tmp_obj.id);
          else
            return false;
        }
        return true;
      }

      function loadMap() {
        // Clear the graph (Genius .__.)
        $scope.graph.clear();
        try {
          var model = JSON.parse($scope.map.mapView.content);

          // Wait 1s and add the cells
          setTimeout(function () {
            for (var i = 0; i < model.nodes.length; i++) {
              $scope.graph.addCell(model.nodes[i]);
            }

            for (var i = 0; i < model.links.length; i++) {
              $scope.graph.addCell(model.links[i]);
            }

            $scope.map.isLocked = ($scope.map.versionIndex != $scope.map.versions.length - 1);
          }, 100);
        } catch (e) {
          console.log(e);
        }
      }

      function clone(a) {
        console.log(a);
        return JSON.parse(angular.toJson(a));
      }

      function removeNode(blockName) {
        var elementId = $scope.map.mapView.nodes[blockName].id;
        $scope.map.mapView.links = $scope.map.mapView.links.filter(function (link) {
          return (link.sourceId != elementId && link.targetId != elementId);
        });
        removeLinks();
        delete $scope.map.mapView.nodes[blockName];
      }

      function removeLink(linkId) {
        var res = {};
        for (var i = 0; i < $scope.map.mapView.links.length; i++) {
          var link = $scope.map.mapView.links[i];
          if (linkId === link.id) {
            $scope.map.mapView.links.splice(i, 1);
            break;
          }
        }
      }

      function getNode(blockId) {
        var res = {};
        angular.forEach($scope.map.mapView.nodes, function (block, key) {
          if (blockId === block.id) {
            res = block;
          }
        });
        return res;
      }

      function getLink(linkId) {
        var res = {};
        for (var i = 0; i < $scope.map.mapView.links.length; i++) {
          var link = $scope.map.mapView.links[i];
          if (linkId === link.id) {
            res = link;
            break;
          }
        }
        return res;
      }

      function updateLink(result) {
        var linkId = result.linkId;
        var process = result.process;
        var user_link = getLink(linkId);
        user_link.condition = result.condition;
        user_link.conditionCode = result.conditionCode;
        console.log("user Process");
        console.log(user_link);
        for (var i = 0; i < user_link.processes.length; i++) {
          var pro = user_link.processes[i];
          if (pro.id == process.id) {
            user_link.processes[i] = process;
            return;
          }
        }
        user_link.processes.push(process);
      }

      function editBlock(cellView) {
        var block = getNode(cellView.id);
        var oldname = angular.copy(block.name);
        Popups.open(
          {
            templateUrl: 'views/CellsEditView/blockDetails.html',
            controller: 'PmblocksCtrl',
            resolve: {
              server: block,
              graphContent: $scope.map.mapView
            }
          },
          function (server) {
            if (oldname !== server.name) {
              cellView.attr('text/text', server.name);
              $scope.map.mapView.nodes[oldname].name = server.name;
              $scope.map.mapView.nodes[oldname].serverUrl = server.serverUrl;
              $scope.map.mapView.nodes[server.name] = $scope.map.mapView.nodes[oldname];
              delete $scope.map.mapView.nodes[oldname];
            }
          }
        );
      }

      function link_blocks(source_block, target_block) {
        $scope.connection_link.set('target', {id: target_block.id});
        $scope.tmp_obj.remove();
        console.log(target_block);
        var link = $scope.connection_link;
        var p_link = {
          id: link.id,
          sourceId: source_block.id,
          targetId: target_block.id,
          processes: []
        };
        $scope.map.mapView.links.push(p_link);

        updateModel();
        var sourceBlock = getNode(p_link.sourceId);
        var targetBlock = getNode(p_link.targetId);
        var res = {
          id: p_link.id,
          source: sourceBlock,
          target: targetBlock
        }
        return res;
      }

      function calcCellPosition(cellView, x, y) {
        var position = {};

        var bbox = cellView.getBBox();
        position.constrained = false;

        position.constrainedX = x;

        if (bbox.x <= 0) {
          position.constrainedX = x + $scope.gridSize;
          position.constrained = true;
        }
        if (bbox.x + bbox.width >= $scope.width) {
          //position.constrainedX = x - $scope.gridSize;
          $scope.width += $scope.gridSize;
          position.constrained = true;
        }

        position.constrainedY = y;

        if (bbox.y <= 0) {
          position.constrainedY = y + $scope.gridSize;
          position.constrained = true;
        }
        if (bbox.y + bbox.height >= $scope.height) {
          //position.constrainedY = y - $scope.gridSize;
          $scope.height += $scope.gridSize;
          position.constrained = true;
        }

        return position;
      }

      function init() {
        $scope.graph = new joint.dia.Graph();
        $scope.innerWidth = $scope.width;
        $scope.innerHeight = $scope.height;
        $scope.connecting = false;
        $scope.connectorMode = false;
        $scope.paper = new joint.dia.Paper({
          el: $('#paper'),//TODO-YB: myabe get as a parameter
          width: $scope.innerWidth,
          height: $scope.innerHeight,
          gridSize: $scope.gridSize,
          model: $scope.graph
        });

        V($scope.paper.svg).attr({viewBox: "0 0 800 500"});
        var graphScale = 1;
        var paperScale = function (sx, sy) {
          $scope.paper.scale(sx, sy);
        };

        $scope.zoomIn = function () {
          graphScale += 0.1;
          paperScale(graphScale, graphScale);
          $scope.innerWidth += $scope.gridSize;
          $scope.innerHeight += $scope.gridSize;
        };

        $scope.zoomOut = function () {
          graphScale -= 0.1;
          $scope.innerWidth -= $scope.gridSize;
          $scope.innerHeight -= $scope.gridSize;
          paperScale(graphScale, graphScale);
        };

        $scope.$watch('map.isLocked', function (newVal, oldVal) {
          var innerElements = $scope.paper.$el.find('g');
          for (var i = 0, length = innerElements.length; i < length; i++) {
            var view = $scope.paper.findView(innerElements[i])
            if (view)
              view.options.interactive = !$scope.map.isLocked;
          }
        });

        $scope.resetZoom = function () {
          graphScale = 1;
          paperScale(graphScale, graphScale);
        };

        joint.shapes.basic.DecoratedRect = joint.shapes.basic.Generic.extend({

          markup: '<g class="rotatable"><g class="scalable"><rect/></g><image/><text/></g>',

          defaults: joint.util.deepSupplement({

            type: 'basic.DecoratedRect',
            size: {width: 200, height: 50},
            attrs: {
              '.': {magnet: false},
              'rect': {fill: '#FFFFFF', stroke: 'black', width: 100, height: 50},
              'text': {
                'font-size': 14,
                text: '',
                'ref-x': 0.6,
                'ref-y': 0.5,
                ref: 'rect',
                'y-alignment': 'middle',
                'x-alignment': 'middle',
                fill: 'black'
              },
              'image': {'ref-x': 2, 'ref-y': 0, ref: 'rect', width: 60, height: 50}
            }

          }, joint.shapes.basic.Generic.prototype.defaults)
        });

        var map_block = new joint.shapes.basic.DecoratedRect({
          position: {x: 50, y: 50},
          attrs: {
            text: {
              text: 'Obstacle',
              fill: '#2e2e2e'
            },
            rect: {
              fill: '#93cede'
            }
          }
        });
        $scope.graphContent_base_block = map_block;
        console.log()

        $scope.paper.$el.mouseup(function () {
          // alert( "Handler for .mouseup() called." );
        });
        $scope.paper.$el.on('contextmenu', function (evt) {
          evt.stopPropagation(); // Stop bubbling so that the paper does not handle mousedown.
          evt.preventDefault();  // Prevent displaying default browser context menu.
          var cellView = $scope.paper.findView(evt.target);
          if (cellView) {
            // The context menu was brought up when clicking a cell view in the paper.
            console.log(cellView.model.attr('text/text'));  // So now you have access to both the cell view and its model.
            if (cellView.model.isLink()) {
              removeLink(cellView.model.id);
            }
            else {
              removeNode(cellView.model.attr('text/text'));
            }
            cellView.remove();
            updateModel();
            // ... display custom context menu, ...
          }
        });

        $scope.paper.on('cell:mouseover', function (cellView, evt) {
          if (!cellView.model.isLink() && !$scope.map.isLocked) {
            var bbox = cellView.getBBox();
            var pos_width = bbox.width / 2; // if the cursor is on the right side
            var relative = evt.offsetX - bbox.x;
            if (relative >= 0 && relative >= pos_width) {
              console.log(relative);
              V($scope.paper.findViewByModel(cellView.model).el).addClass('pm_connector');
              $scope.connectorMode = true;
            }
            else {
              V($scope.paper.findViewByModel(cellView.model).el).removeClass('pm_connector')
              $scope.connectorMode = false;
            }
          }
        });

        $scope.paper.on('cell:pointerdblclick', function (cellView, evt, x, y) {
          if (!$scope.map.isLocked) {
            if (cellView.model.isLink()) {
              cellView.model.unset('vertices');
              var mapLink = getLink(cellView.model.id);
              var sourceBlock = getNode(mapLink.sourceId);
              var targetBlock = getNode(mapLink.targetId);
              var link = {
                id: mapLink.id,
                source: sourceBlock,
                target: targetBlock,
                condition: mapLink.condition,
                conditionCode: mapLink.conditionCode
              }
              Popups.open({
                templateUrl: 'views/processes.html',
                controller: 'ProcessesCtrl',
                resolve: {link: link, map: $scope.map.mapView}
              }, updateLink);
            }
            else {
              var block = getNode(cellView.model.id);
              if (block === {}) {
                console.log("Error: can't find block");
                return;
              }
              console.log(block);
              editBlock(cellView.model);
            }
          }
        });

        $scope.paper.on('cell:pointerdown', function (cellView, evt, x, y) {
          if (cellView.model.isLink() || $scope.map.isLocked) {
            return;
          }
          if ($scope.connectorMode && !$scope.connecting) {
            cellView.options.interactive = false;
            $scope.connecting = true;
            $scope.source_element = cellView;
            $scope.tmp_obj = new joint.shapes.basic.Rect({
              position: {x: x, y: y},
              size: {width: 0.1, height: 0.1}
            });
            console.log($scope.tmp_obj);
            $scope.graph.addCell($scope.tmp_obj);
            console.log(cellView.model.id);
            $scope.connection_link = new joint.dia.Link({
              source: {id: cellView.model.id},
              target: {id: $scope.tmp_obj.id},
              router: {name: 'manhattan'},
              connector: {name: 'rounded'},
              attrs: {
                '.connection': {
                  stroke: '#333333',
                  'stroke-width': 3
                },
                '.marker-target': {
                  fill: '#333333',
                  d: 'M 10 0 L 0 5 L 10 10 z'
                }
              }
            });
            $scope.graph.addCell($scope.connection_link);
          }
        });
        $scope.paper.on('cell:pointerup', function (cellView, evt, x, y) {
          if (cellView.model.isLink()) {
            if (isLinkInvalid(cellView.model)) {
              $scope.map.mapView.links = $scope.map.mapView.links.filter(function(link){
                return link.id != cellView.model.id;
              })
              cellView.model.remove();
              removeLinks();
              $scope.$apply();
            }
          }
          if ($scope.map.isLocked)
            return;
          if (!$scope.connecting) {
            console.log(evt);
            return;
          }
          $('html').removeClass('pm_connector');
          // Find the first element below that is not a link nor the dragged element itself.
          var elementBelow = $scope.graph.get('cells').find(function (cell) {
            if (cell instanceof joint.dia.Link) {
              return false; // Not interested in links.
            }
            if (cell.id === cellView.model.id) {
              return false; // The same element as the dropped one.
            }
            if (cell.getBBox().containsPoint(g.point(x, y))) {
              return true;
            }
            return false;
          });
          // If the two elements are connected already, don't
          // connect them again
          if (elementBelow && !_.contains($scope.graph.getNeighbors(elementBelow), cellView.model)) {
            if (cellView.model.isLink()) {
              cellView.model.set('target', {id: elementBelow.id});
            }
            else {
              console.log(cellView.model);
              console.log($scope.connection_link.get('source'));
              var link = link_blocks($scope.connection_link.get('source'), elementBelow);
              updateModel();
              Popups.open({
                templateUrl: 'views/processes.html',
                controller: 'ProcessesCtrl',
                resolve: {link: link, map: $scope.map.mapView}
              }, updateLink);
              cellView.model.translate(0, 100);
            }
            /*var bbox = cellView.getBBox();
             var position = calcCellPosition(cellView, bbox.x, bbox.y)
             cellView.model.position(position.constrainedX, position.constrainedY);*/
          }
          cellView.options.interactive = true;
          $scope.connecting = false;

          $scope.graph.getLinks().forEach(function (link) {
            if (isLinkInvalid(link)) {
              link.remove();
            }
          });
        });

        $scope.$watch('clickMode.drop', function (newVal, oldVal) {
          if ($scope.clickMode && $scope.clickMode.drop !== false) {
            $scope.dropBlock($scope.clickMode.drop); // the event is here
          }
        });

        $scope.dropBlock = function (event) {
          console.log('clickmode --->' + $scope.clickMode);
          if ($scope.clickMode && $scope.clickMode.mode !== '' && !$scope.map.isLocked) {
            var x = event.pageX - $scope.paper.$el.offset().left,
              y = event.pageY - $scope.paper.$el.offset().top,
              name = blockFactory.newBlock($scope.clickMode.mode);
            var block = $scope.graphContent_base_block.clone().position(x, y).attr({
              image: {
                'xlink:href': 'images/controls/' + $scope.clickMode.mode + '.png'
              },
              text: {
                text: name,
                fill: '#2e2e2e'
              }
            });
            $scope.graph.addCell(block);
            $scope.map.mapView.nodes[name] = {
              id: block.id,
              type: $scope.clickMode.mode,
              name: name,
              serverUrl: "localhost:8100", /* Default address */
              attributes: {}
            };
            $scope.clickMode.mode = '';
            $scope.clickMode.drop = false;
            updateModel();
          }
          else {
            if (!$scope.clickMode) $scope.clickMode = {};
            $scope.clickMode.drop = false;
            $scope.clickMode.mode = '';
          }
        }

        $scope.graph.on('change', function (cell) {
          console.log('New cell with id ' + cell.id + ' added to the graph.');
          updateModel();
        });

        $scope.paper.on('cell:pointermove', function (cellView, evt, x, y) {
          if ($scope.map.isLocked)
            return;

          if ($scope.connecting) {
            $scope.tmp_obj.position(x, y);
            $('html').addClass('pm_connector');
          }

          updateModel();
        });

        loadMap();
      }

      init();

      $scope.$watchGroup(['map.id', 'map.versionIndex'], function (newValues, oldValues, scope) {
        loadMap();
      });

      $scope.$watch('map.mapView.content', function (newValues, oldValues) {
        if ($scope.viewMode!=localViewMode)
          loadMap();
      });

      $scope.$watch('map.mapView', function (newValues, oldValues) {
        removeLinks();
      });

      var removeLinks = function(){
        $scope.graph.getLinks().forEach(function (link) {
          if (isLinkInvalid(link)) {
            link.remove();
          }
        });

        var content = JSON.parse($scope.map.mapView.content);
        content.links = content.links.filter(function(link){
          for (var i= 0, length=$scope.map.mapView.links.length; i<length; i++)
            if (link.id==$scope.map.mapView.links[i].id) return true;

          return false;
        })

        $scope.map.mapView.content = JSON.stringify(content);
      };

    }]
  };
});
