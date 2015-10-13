'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:dacCreator
 * @description
 * # dacCreator
 */
 angular.module('productionMapConsoleApp')
 .directive('dacCreator', function () {
 	var controller = ['$scope','Popups', function ($scope,Popups) {
 		$scope.graph = [];
		function clone(a) {
		   return JSON.parse(JSON.stringify(a));
		}
		function getNode(blockId){
	 		var res = {};
	 		for(var i=0; i < $scope.graphContent.nodes.length; i++){
	    		var block = $scope.graphContent.nodes[i];
	    		if(blockId === block.id){
	    			res = block;
	    			break;
	    		}
	    	}
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
				targetId: target_block.id
			};
			$scope.graphContent.links.push(p_link);
			$scope.graphModel = JSON.stringify($scope.graph);
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

            if (bbox.x <= 0) { position.constrainedX = x + $scope.gridSize; position.constrained = true; }
            if (bbox.x + bbox.width >= $scope.width) { position.constrainedX = x - $scope.gridSize; position.constrained = true; }

            position.constrainedY = y;

            if (bbox.y <= 0) {  position.constrainedY = y + $scope.gridSize; position.constrained = true; }
            if (bbox.y + bbox.height >= $scope.height) { position.constrainedY = y - $scope.gridSize; position.constrained = true; }

            return position;
        }

 		function init() {
			$scope.graph = new joint.dia.Graph();
			var paper = new joint.dia.Paper({
			    el: $('#paper'),//TODO-YB: myabe get as a parameter
			    width: $scope.width,
			    height: $scope.height,
			    gridSize: $scope.gridSize,
			    model: $scope.graph
			});

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
				if(translate_block.x >= $scope.width - 600){
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
                	Popups.open(
	                        'views/processes.html',
	                        'ProcessesCtrl',
	                        { link: link }
	                );
                }
                else{
                	var block = getNode(cellView.model.id);
                	if(block === {}){
                		console.log("Error: can't find block");
                		return;
                	}
                	Popups.open(
	                        'views/CellsEditView/'+cellView.model.attributes.attrs.text.text+'.html',
	                        cellView.model.attributes.attrs.text.text+'Ctrl',
	                        {node: block}
	                );
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
			        	Popups.open(
		                        'views/processes.html',
		                        'ProcessesCtrl',
		                        { link: link }
		                );
			        	cellView.model.translate(0, 100);
			        }
                    /*var bbox = cellView.getBBox();
                    var position = calcCellPosition(cellView, bbox.x, bbox.y)
                    cellView.model.position(position.constrainedX, position.constrainedY);*/

                }
			});

			paper.on('blank:pointerclick', function(evt, x, y){
				if($scope.clickMode === '')
				{

				}
				else{
                	var block = $scope.map_base_block.clone().position(x, y).attr({
				    image: {
				    	'xlink:href': 'images/controls/'+$scope.clickMode+'.png'
				    },
				    text: {
				        text: $scope.clickMode,
				        fill: '#2e2e2e'
					}
					});
					$scope.graph.addCell(block);
					$scope.graphContent.nodes.push({
						id: block.id,
						type: $scope.clickMode,
						name: $scope.clickMode,
						serverUrl: "localhost:8100" //Default address
					});
					$scope.graphModel = JSON.stringify($scope.graph);
                }
			});

            paper.on('cell:pointermove', function (cellView, evt, x, y) {

                var position = calcCellPosition(cellView, x, y);

                //if you fire the event all the time you get a stack overflow
                if (position.constrained) { cellView.pointermove(evt, position.constrainedX, position.constrainedY); }
            });
            $scope.graphModel = JSON.stringify($scope.graph);
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
