import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, ViewContainerRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as joint from 'jointjs';
import * as _ from 'lodash';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { ProcessesComponentWindowData, ProcessesComponentWindow } from './popups/proccesses';


@Component({
  moduleId: module.id,
  selector: 'pm-map-designer',
  templateUrl: 'map-designer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../node_modules/jointjs/css/layout.css',
    '../../../node_modules/jointjs/css/themes/default.css',
    'map-designer.component.css']
})
export class MapDesignerComponent implements OnInit {

  @Output() paperInit = new EventEmitter();
  @Input() map: any = {};

  public graph: any;
  public paper: any;
  private _currentLink: any;

  constructor(public modal: Modal) {
    this._currentLink = null;
  }

  openProcessesModal(linkId) {
    this.modal.open(ProcessesComponentWindow, new ProcessesComponentWindowData(2, 3));
  }

  getLink(linkId: any) {
    let res = {};
    res = _.find(this.map.mapView.links, (link) => { return link.id === linkId; });
    return res;
  }

  svgCheckPort(portType, elem) {
    return elem.getAttribute('port').startsWith(portType);
  }

  getNode(blockId) {
    let res = {};
    res = _.find(this.map.mapView.nodes, (node) => { return node.id === blockId; });
    return res;
  }

  connectNodes(linkId: any, sourceId: any, targetId: any) {
    this.openProcessesModal(linkId);
    // let mapLink = this.getLink(linkId);
    // let sourceBlock = this.getNode(sourceId);
    // let targetBlock = this.getNode(targetId);

    // _modal.prom()
    //   .size('lg')
    //   .isBlocking(true)
    //   .showClose(true)
    //   .keyboard(27)
    //   .title('Hello World')
    //   .body('<h1>asdfasdfadsf</h1>')
    //   .open();

    // Popups.open({
    //   templateUrl: 'views/processes.html',
    //   controller: 'ProcessesCtrl',
    //   resolve: { link: mapLink, map: $scope.map.mapView, source: sourceBlock, target: targetBlock }
    // }, function (result) {
    //   mapLink = result.link;
    // });
  }


  ngOnInit() {
    this.openProcessesModal(1);
    // Canvas where sape are dropped
    this.graph = new joint.dia.Graph;
    this.paper = new joint.dia.Paper({
      el: $('#paper'),
      model: this.graph,
      snapLinks: { radius: 75 },
      linkPinning: false,
      embeddingMode: false,
      defaultLink: new joint.dia.Link({
        router: { name: 'manhattan' },
        connector: { name: 'rounded' }
      }),
      markAvailable: true,
      validateConnection: (cellViewS, magnetS, cellViewT, magnetT, end, linkView) => {
        // Prevent loop linking and input to output
        return (cellViewS.id !== cellViewT.id) && this.svgCheckPort('in', magnetT) && this.svgCheckPort('out', magnetS);
      },
    });

    /* TODO: add support for hovering on output port, when user mouse hovers above output show the relevant inputs for that node 
        use Marking available magnets example from jointjs website*/
    joint.shapes.devs.PMStartPoint = joint.shapes.devs.Model.extend({

      markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><image/><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
      portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/><text class="port-label"/></g>',

      defaults: joint.util.deepSupplement({

        type: 'devs.PMStartPoint',
        size: { width: 40, height: 39 },
        outPorts: [''],
        attrs: {
          '.body': { stroke: '#3c3e41', fill: '#2c2c2c', 'rx': 6, 'ry': 6, 'opacity': 0 },
          '.label': {
            text: '', 'ref-y': 0.83, 'y-alignment': 'middle',
            fill: '#f1f1f1', 'font-size': 13
          },
          '.port-body': { r: 7.5, stroke: 'gray', fill: '#2c2c2c', magnet: 'active' },
          'image': {
            'ref-x': 10, 'ref-y': 18, ref: 'rect',
            width: 35, height: 34, 'y-alignment': 'middle',
            'x-alignment': 'middle', 'xlink:href': 'assets/img/start.png'
          }
        }

      }, joint.shapes.devs.Model.prototype.defaults)
    });

    joint.shapes.devs.PMStartPointView = joint.shapes.devs.ModelView;

    let startShape = new joint.shapes.devs.PMStartPoint({
      position: { x: 40, y: 30 },
    });

    this.graph.addCells([startShape]);

    this.paper.on('cell:pointerup', (cellView, evt, x, y) => {
      if (this._currentLink) {
        let link = this._currentLink;
        let sourceId = link.get('source').id;
        let targetId = link.get('target').id;

        
        this.connectNodes(link.id, sourceId, targetId);
        this._currentLink = null;
      }
    });

    this.graph.on('change:source change:target', (link) => {
      let sourceId = link.get('source').id;
      let targetId = link.get('target').id;

      if (targetId && sourceId) {
        this._currentLink = link;
      }
      else {
        this._currentLink = null;
      }

    });

    /* only needed for debug */
    window.setTimeout(() => {
      this.paperInit.emit({
        paper: this.paper,
        graph: this.graph
      });
    }, 100);
  }

}
