import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as joint from 'jointjs';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'pm-map-designer',
  templateUrl: 'map-designer.component.html',
  styleUrls: ['map-designer.component.css']
})
export class MapDesignerComponent implements OnInit {

  @Output() paperInit = new EventEmitter();
  public graph: any;
  public paper: any;

  constructor() {}

  ngOnInit() {
    // Canvas where sape are dropped
    this.graph = new joint.dia.Graph;
      this.paper = new joint.dia.Paper({
        el: $('#paper'),
        model: this.graph,
        snapLinks: true,
        linkPinning: false,
        embeddingMode: true,
        validateEmbedding: function(childView, parentView) {
            return parentView.model instanceof joint.shapes.devs.Coupled;
        },
        validateConnection: function(sourceView, sourceMagnet, targetView, targetMagnet) {
            return sourceMagnet !== targetMagnet;
        }
      });
      // let connect = function(source, sourcePort, target, targetPort) {
      //   let link = new joint.shapes.devs.Link({
      //       source: { id: source.id, selector: source.getPortSelector(sourcePort) },
      //       target: { id: target.id, selector: target.getPortSelector(targetPort) }
      //   });
      //   link.addTo(this.graph).reparent();
      // };

      joint.shapes.devs.PMDragModelView = joint.shapes.devs.Model.extend({

        markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><image/><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        portMarkup: '<g class="port"><circle class="port-body"/><text class="port-label"/></g>',
    
        defaults: joint.util.deepSupplement({
    
            type: 'devs.PMDragModelView',
            size: { width: 110, height: 84 },
            inPorts: [''],
            outPorts: [''],
            attrs: {
                '.body': { stroke: '#3c3e41', fill: '#2c2c2c', 'rx': 6, 'ry': 6},
                '.label': { text: 'Command Line', 'ref-y': 0.83, 'y-alignment': 'middle', fill: '#f1f1f1', 'font-size': 13 },
                '.port-body': { r: 7.5, stroke: 'gray', fill: '#2c2c2c', magnet: 'active' },
                'image': {'ref-x': 34, 'ref-y': 30, ref: 'rect',
                     width: 46, height: 34, 'y-alignment': 'middle',
                     'x-alignment': 'middle', 'xlink:href': 'assets/img/agents-small-01.png'}
            }
    
        }, joint.shapes.devs.Model.prototype.defaults)
    });
    joint.shapes.devs.PMDragModelView = joint.shapes.devs.ModelView;

    let mapBlock = new joint.shapes.devs.PMDragModelView({
      position: {x: 50, y: 50},
      attrs: {
        text: {
          text: 'Obstacle'
        }
      }
    });

    let r1 = mapBlock.clone().position(0, 0).attr({
      image: {
        'xlink:href': 'assets/img/agents-small-01.png'
      },
      text: {
        text: 'Command Line'
      }
    });

    this.graph.addCells([r1]);

    /* only needed for debug */
    window.setTimeout(() => {
      this.paperInit.emit({
        paper: this.paper,
        graph: this.graph
      });
    }, 100);
  }

}
