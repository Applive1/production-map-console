'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:dacCreator
 * @description
 * # dacCreator
 */
 angular.module('productionMapConsoleApp')
 .directive('dacCreator', function () {
 	var controller = ['$scope','Popups', 'blockFactory', function ($scope,Popups, blockFactory) {
 		$scope.graph = [];

		function updateModel(){
			$scope.graphModel = JSON.stringify($scope.graph, null, 2);
		}
		function clone(a) {
			console.log(a);
		   return JSON.parse(JSON.stringify(a));
		}
		function getNode(blockId){
	 		var res = {};
	 		angular.forEach($scope.graphContent.nodes, function(block, key) {
	    		if(blockId === block.id){
	    			res = block;
	    		}
	    	});
	    	return res;
	 	}
	 	function getLink(linkId){
	 		var res = {};
	 		for(var i=0; i < $scope.graphContent.links.length; i++){
	    		var link = $scope.graphContent.links[i];
	    		if(linkId === link.id){
	    			res = link;
	    			break;
	    		}
	    	}
	    	return res;
	 	}
	 	function updateLink(result){
	 		var linkId = result.linkId;
	 		var process = result.process;
			var user_link = getLink(linkId);
			console.log("user Process");
			console.log(user_link);
			for(var i = 0; i < user_link.processes.length; i++){
				var pro = user_link.processes[i];
				if(pro.id == process.id){
					user_link.processes[i] = process;
					return;
				}
			}
			user_link.processes.push(process);
		}
 		function link_blocks(source_block, target_block){
			var link = new joint.dia.Link({
			    source: { id: source_block.id },
			    target: { id: target_block.id },
			    router: { name: 'manhattan' },
			    connector: { name: 'rounded' },
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
			$scope.graph.addCell(link);
			var p_link = {
				id: link.id,
				sourceId: source_block.id,
				targetId: target_block.id,
				processes: []
			};
			$scope.graphContent.links.push(p_link);

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

		function connector_on_click(source){

		}

        function calcCellPosition(cellView, x, y){
            var position = {};

            var bbox = cellView.getBBox();
            position.constrained = false;

            position.constrainedX = x;

            if (bbox.x <= 0) {
            	position.constrainedX = x + $scope.gridSize; position.constrained = true;
            }
            if (bbox.x + bbox.width >= $scope.width) {
            	//position.constrainedX = x - $scope.gridSize;
            	$scope.width += $scope.gridSize;
            	position.constrained = true;
            }

            position.constrainedY = y;

            if (bbox.y <= 0) {  position.constrainedY = y + $scope.gridSize; position.constrained = true; }
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
			var paper = new joint.dia.Paper({
			    el: $('#paper'),//TODO-YB: myabe get as a parameter
			    width: $scope.innerWidth,
			    height: $scope.innerHeight,
			    gridSize: $scope.gridSize,
			    model: $scope.graph
			});

			var graphScale = 1;
			var paperScale = function(sx, sy) {
			    paper.scale(sx, sy);
			};

			$scope.zoomIn = function() {
			    graphScale += 0.1;
			    paperScale(graphScale, graphScale);
			    $scope.innerWidth += $scope.gridSize;
			    $scope.innerHeight += $scope.gridSize;
			};

			$scope.zoomOut = function() {
			    graphScale -= 0.1;
			    $scope.innerWidth -= $scope.gridSize;
			    $scope.innerHeight -= $scope.gridSize;
			    paperScale(graphScale, graphScale);
			};

			$scope.resetZoom = function() {
			    graphScale = 1;
			    paperScale(graphScale, graphScale);
			};

			joint.shapes.basic.DecoratedRect = joint.shapes.basic.Generic.extend({

			    markup: '<g class="rotatable"><g class="scalable"><rect/></g><image/><text/></g>',

			    defaults: joint.util.deepSupplement({

			        type: 'basic.DecoratedRect',
			        size: { width: 160, height: 50 },
		            attrs: {
		            	'.': { magnet: false },
			            'rect': { fill: '#FFFFFF', stroke: 'black', width: 100, height: 50 },
			            'text': { 'font-size': 14, text: '', 'ref-x': 0.6, 'ref-y': 0.5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black'},
			            'image': { 'ref-x': 2, 'ref-y': 0, ref: 'rect', width: 60, height: 50 }
			        }

			    }, joint.shapes.basic.Generic.prototype.defaults)
			});

			var map_block  = new joint.shapes.basic.DecoratedRect({
			    position: { x: 50, y: 50 },
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
			$scope.map_base_block = map_block;
			$scope.pm_blocks = [];
			var translate_block = {
				x: 0,
				y: 0
			};
			angular.forEach($scope.graphContent.nodes, function(node, key) {
				var current_block = map_block.clone().translate(translate_block.x, translate_block.y).attr({
				    image: {
				    	'xlink:href': node.img_url
				    },
				    text: {
				        text: node.text,
				        fill: '#2e2e2e'
					}
				});
				this.push(current_block);
				translate_block.x = translate_block.x + 165;
				if(translate_block.x >= $scope.width){
					//TODO: YB: fix the width if
					translate_block.x = 0;
					translate_block.y = translate_block.y + 60;
				}
			}, $scope.pm_blocks);

			angular.forEach($scope.graphContent.links, function(link, key) {
				var link = new joint.dia.Link({
				    source: { id: link.sourceId },
				    target: { id: link.targetId },
				    router: { name: 'manhattan' },
				    connector: { name: 'rounded' },
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
				this.push(link);
			}, $scope.pm_blocks);

			$scope.graph.addCells($scope.pm_blocks);

			paper.on('cell:mouseover', function(cellView, evt){
				if(cellView.model.isLink()){
				}
				else{
					var bbox = cellView.getBBox();
					var pos_width = bbox.width/2; // if the cursor is on the right side
					var relative = evt.offsetX - bbox.x;
					if(relative >= 0 && relative >= pos_width){
						console.log(relative);
						V(paper.findViewByModel(cellView.model).el).addClass('pm_connector');
						$scope.connectorMode = true;
					}
					else{
						V(paper.findViewByModel(cellView.model).el).removeClass('pm_connector')
						$scope.connectorMode = false;
					}
				}
			});

            paper.on('cell:pointerdblclick', function(cellView, evt, x, y) {
                if(cellView.model.isLink()){
                	var mapLink = getLink(cellView.model.id);
                	var sourceBlock = getNode(mapLink.sourceId);
                	var targetBlock = getNode(mapLink.targetId);
                	var link = {
                		id: mapLink.id,
                		source: sourceBlock,
                		target: targetBlock
                	}
                	Popups.open({
                        templateUrl: 'views/processes.html',
                        controller: 'ProcessesCtrl'
                    },updateLink);
                }
                else{
                	var block = getNode(cellView.model.id);
                	if(block === {}){
                		console.log("Error: can't find block");
                		return;
                	}
                	console.log(block);
                	Popups.open({
                        templateUrl: 'views/CellsEditView/blockDetails.html',
                        controller: 'PmblocksCtrl',
                        resolve : {
                            server: block,
                            graphContent: $scope.graphContent
                        }
                    },function(server){
                        var oldname = cellView.model.attr('text/text');
                        if(oldname !== server.name){
                            cellView.model.attr('text/text', server.name);
                            $scope.graphContent.nodes[oldname].name = server.name;
                            $scope.graphContent.nodes[oldname].serverUrl = server.serverUrl;
                            $scope.graphContent.nodes[server.name] = $scope.graphContent.nodes[oldname];
                            delete $scope.graphContent.nodes[oldname];
                        }
                    });
                }
			});

			paper.on('cell:pointerdown', function(cellView, evt, x, y){
				if($scope.connectorMode){
					cellView.options.interactive = false;
					$scope.source_element = cellView;
				}
			});
			paper.on('cell:pointerup', function(cellView, evt, x, y) {
	    		// Find the first element below that is not a link nor the dragged element itself.
			    var elementBelow = $scope.graph.get('cells').find(function(cell) {
			        if (cell instanceof joint.dia.Link){
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
			    	if(cellView.model.isLink()){
			    		//TODO: link the end of the link onlly
			        }
			        else{
			        	var link = link_blocks(cellView.model, elementBelow);
			        	Popups.open({
                            templateUrl: 'views/processes.html',
                            controller: 'ProcessesCtrl',
                            resolve : { link: link }
                        },updateLink);

			        	cellView.model.translate(0, 100);
			        }
                    /*var bbox = cellView.getBBox();
                    var position = calcCellPosition(cellView, bbox.x, bbox.y)
                    cellView.model.position(position.constrainedX, position.constrainedY);*/
                }
                cellView.options.interactive = true;
			});

			$scope.dropBlock = function(event){
				console.log('clickmode --->' + $scope.clickMode);
				if($scope.clickMode.mode === '')
				{

				}
				else{
					var x = event.offsetX;
					var y = event.offsetY;
					var name = blockFactory.newBlock($scope.clickMode.mode);
					var block = $scope.map_base_block.clone().position(x, y).attr({
					    image: {
					    	'xlink:href': 'images/controls/'+$scope.clickMode.mode+'.png'
					    },
					    text: {
					        text: name,
					        fill: '#2e2e2e'
						}
					});
					$scope.graph.addCell(block);
					$scope.graphContent.nodes[name] = {
						id: block.id,
						type: $scope.clickMode.mode,
						name: name,
						serverUrl: "localhost:8100" //Default address
					};
					$scope.clickMode.mode = '';
					updateModel();
				}
			}

            /*paper.on('cell:pointermove', function (cellView, evt, x, y) {

                var position = calcCellPosition(cellView, x, y);

                //if you fire the event all the time you get a stack overflow
                if (position.constrained) { cellView.pointermove(evt, position.constrainedX, position.constrainedY); }
            });*/
            updateModel();
		}
	init();
}];

return {
	scope: {
		graphContent: '=',
		height:'=height',
		width: '=width',
		on_connection: '=onconnection',
        gridSize : '=',
		graphModel: '=graphModel',
		clickMode: '='
	},
	templateUrl: 'scripts/directives/templates/dac-creator.html',
	restrict: 'E',
	controller: controller
};
});