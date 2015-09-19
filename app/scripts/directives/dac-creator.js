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

 		function init() {
			var graph = new joint.dia.Graph;
			var paper = new joint.dia.Paper({
			    el: $('#paper'),
			    width: $scope.width,
			    height: $scope.height,
			    gridSize: 10,
			    model: graph
			});

			joint.shapes.devs.DecoratedRect = joint.shapes.devs.Model.extend({

			    markup: '<g class="rotatable"><g class="scalable"><rect/></g><image/><text/></g>',

			    defaults: joint.util.deepSupplement({

			        type: 'devs.DecoratedRect',
			        size: { width: 160, height: 50 },
		            attrs: {
		                '.': { magnet: false },
		                circle: {
		                    r: 6, //circle radius
		                    magnet: true,
		                    stroke: 'black'
		                },
			            'rect': { fill: '#FFFFFF', stroke: 'black', width: 100, height: 50 },
			            'text': { 'font-size': 14, text: '', 'ref-x': .6, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle', fill: 'black' },
			            'image': { 'ref-x': 2, 'ref-y': 0, ref: 'rect', width: 60, height: 50 }
			        }

			    }, joint.shapes.devs.Model.prototype.defaults)
			});

			var map_block  = new joint.shapes.devs.DecoratedRect({
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
