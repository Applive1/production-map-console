'use strict';

/**
 * @ngdoc directive
 * @name productionMapConsoleApp.directive:dacCreator
 * @description
 * # dacCreator
 */
 angular.module('productionMapConsoleApp')
 .directive('dacCreator', function () {
 	var controller = ['$scope', function ($scope) {
 		$scope.graph = [];

 		function link_blocks(source_block, target_block){
			console.log(source_block.id);
			console.log(target_block.id);
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
		}

		function connector_on_click(source){

		}
 		function init() {
			var graph = new joint.dia.Graph;
			var paper = new joint.dia.Paper({
			    el: $('#paper'),
			    width: $scope.width,
			    height: $scope.height,
			    gridSize: 10,
			    model: graph
			});

			joint.shapes.basic.DecoratedRect = joint.shapes.basic.Generic.extend({

			    markup: '<g class="rotatable"><g class="scalable"><rect/></g><image/><text/></g>',

			    defaults: joint.util.deepSupplement({

			        type: 'basic.DecoratedRect',
			        size: { width: 160, height: 50 },
		            attrs: {
		            	'.': { magnet: false },
			            'rect': { fill: '#FFFFFF', stroke: 'black', width: 100, height: 50 },
			            'text': { 'font-size': 14, text: '', 'ref-x': .6, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black'},
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
			var pm_blocks = [];
			var translate_block = {
				x: 0,
				y: 0
			}
			angular.forEach($scope.nodes, function(node, key) {
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
			}, pm_blocks);

			graph.addCells(pm_blocks);

			paper.on('cell:pointerup', function(cellView, evt, x, y) {

	    		// Find the first element below that is not a link nor the dragged element itself.
			    var elementBelow = graph.get('cells').find(function(cell) {
			        if (cell instanceof joint.dia.Link) return false; // Not interested in links.
			        if (cell.id === cellView.model.id) return false; // The same element as the dropped one.
			        if (cell.getBBox().containsPoint(g.point(x, y))) {
			            return true;
			        }
			        return false;
			    });

			    // If the two elements are connected already, don't
			    // connect them again (this is application specific though).
			    if (elementBelow && !_.contains(graph.getNeighbors(elementBelow), cellView.model)) {
			        graph.addCell(new joint.dia.Link({
			            source: { id: cellView.model.id }, target: { id: elementBelow.id },
			            attrs: { '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z' } }
			        }));
			        // Move the element a bit to the side.
			        cellView.model.translate(-200, 0);
			    }
			});
			$scope.graph = graph;
		}


	init();

}];

return {
	scope: {
		nodes: '=nodes',
		height:'=height',
		width: '=width'
	},
	templateUrl: 'scripts/directives/templates/dac-creator.html',
	restrict: 'E',
	controller: controller
};
});
