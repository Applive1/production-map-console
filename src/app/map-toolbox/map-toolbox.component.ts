import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import * as joint from 'jointjs';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'pm-map-toolbox',
  templateUrl: 'map-toolbox.component.html',
  styleUrls: ['../shared/css/map-bar.css', 'map-toolbox.component.css']
})
export class MapToolboxComponent implements OnInit, OnChanges {

  @Input() paper: any;
  @Input() graph: any;

  private stencilPaper: any;
  constructor() {}

  ngOnInit() {
    // Canvas from which you take shapes
    let stencilGraph = new joint.dia.Graph;
    this.stencilPaper = new joint.dia.Paper({
        el: $('#stencil'),
        height: 248,
        width: 270,
        model: stencilGraph,
        interactive: false
      });
    
    joint.shapes.devs.PMDragModel = joint.shapes.devs.Model.extend({

        markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><image/><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
        portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/><text class="port-label"/></g>',
    
        defaults: joint.util.deepSupplement({
    
            type: 'devs.PMDragModel',
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

    joint.shapes.basic.DecoratedRect = joint.shapes.basic.Generic.extend({

      markup: '<g class="rotatable"><g class="scalable"><rect/></g><image/><text/></g>',

      defaults: joint.util.deepSupplement({

        type: 'basic.DecoratedRect',
        size: {width: this.stencilPaper.options.width, height: 62},
        attrs: {
          '.': {magnet: false},
          'rect': {width: this.stencilPaper.options.width, height: 62, fill: '#2d2f30'},
          'text': {
            'font-size': 13,
            text: '',
            'ref-x': 0.44,
            'ref-y': 0.5,
            ref: 'rect',
            'y-alignment': 'middle',
            'x-alignment': 'middle',
            fill: '#bbb'
          },
          'image': {'ref-x': 37, 'ref-y': 30, ref: 'rect',
                     width: 29, height: 33, 'y-alignment': 'middle',
                     'x-alignment': 'middle'}
        }

      }, joint.shapes.basic.Generic.prototype.defaults)
    });

    let mapBlock = new joint.shapes.basic.DecoratedRect({
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
    let r2 = mapBlock.clone().position(0, 62).attr({
              image: {
                'xlink:href': 'assets/img/agents-small-02.png'
              },
              text: {
                text: 'File Server'
              }
            });
    let r3 = mapBlock.clone().position(0, 124).attr({
              image: {
                'xlink:href': 'assets/img/agents-small-03.png'
              },
              text: {
                text: 'Amazon Ec2'
              }
            });

    let r4 = mapBlock.clone().position(0, 186).attr({
              image: {
                'xlink:href': 'assets/img/agents-small-04.png'
              },
              text: {
                text: 'Text Editor'
              }
            });

    stencilGraph.addCells([r1, r2, r3, r4]);
  }

  getFlyCell(cellView: any): any {
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

    
     return   new joint.shapes.devs.PMDragModel({
        position: { x: 22, y: 100 },
        attrs: {
          '.label': {
            text: cellView.model.attr('text/text')
          },
          image: {
            'xlink:href': cellView.model.attr('image/xlink:href')
          }
        }
    });
  
    
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}): void {
    if(changes['paper'].currentValue != null){
      this.stencilPaper.on('cell:pointerdown', (cellView, e, x, y) => {
        let paper = changes['paper'].currentValue;
        let graph = changes['graph'].currentValue;
        $('body').append('<div id="flyPaper" style="position:fixed;z-index:100;opacity:.7;pointer-event:none;"></div>');
        let flyGraph = new joint.dia.Graph,
          flyPaper = new joint.dia.Paper({
            el: $('#flyPaper'),
            model: flyGraph,
            interactive: false
          }),
          flyShape = this.getFlyCell(cellView),
          pos = cellView.model.position(),
          offset = {
            x: x - pos.x,
            y: y - pos.y
          };
  
        flyShape.position(0, 0);
        flyGraph.addCell(flyShape);
        $("#flyPaper").offset({
          left: e.pageX - offset.x,
          top: e.pageY - offset.y
        });
        $('body').on('mousemove.fly', function(e) {
          $("#flyPaper").offset({
            left: e.pageX - offset.x,
            top: e.pageY - offset.y
          });
        });
        $('body').on('mouseup.fly', function(e) {
          let x = e.pageX,
            y = e.pageY,
            target = paper.$el.offset();
          // Dropped over paper ?
          if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
            let s = flyShape.clone();
            s.position(x - target.left - offset.x, y - target.top - offset.y);
            graph.addCell(s);
          }
          $('body').off('mousemove.fly').off('mouseup.fly');
          flyShape.remove();
          $('#flyPaper').remove();
        });
      });
    }
  }
}
