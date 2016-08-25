import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, ViewContainerRef, ViewChild, OnChanges, SimpleChange } from '@angular/core';
import * as $ from 'jquery';
import * as joint from 'jointjs';
import * as _ from 'lodash';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { MapService } from '../shared/services/map.service';
import { Response } from '@angular/http';

import { ProcessesComponentWindowData, ProcessesComponentWindow } from './popups/proccesses';


@Component({
  moduleId: module.id,
  selector: 'pm-map-designer',
  templateUrl: 'map-designer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../node_modules/jointjs/css/layout.css',
    '../../../node_modules/jointjs/css/themes/default.css',
    'map-designer.component.css'],
  providers: [MapService]
})
export class MapDesignerComponent implements OnInit, OnChanges {

  @Output() paperInit = new EventEmitter();
  @Input() map: any = {};

  public graph: any;
  public paper: any;
  private _currentLink: any;
  private _map: any;

  constructor(public modal: Modal, private mapService: MapService) {
    this._currentLink = null;
  }

  openProcessesModal(link: any, src: any, dest: any) {
    this.modal.open(ProcessesComponentWindow, new ProcessesComponentWindowData(link, src, dest));
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
    res = _.find(this.map.mapView.nodes, (node) => {
      return node.id === blockId;
    });
    return res;
  }

  connectNodes(linkId: any, sourceId: any, targetId: any) {
    let pLink = {
      id: linkId,
      sourceId: sourceId,
      targetId: targetId,
      processes: [],
      result: '',
      condition: false
    };
    this.map.mapView.links.push(pLink);
    let mapLink = this.getLink(linkId);
    let sourceBlock = this.getNode(sourceId);
    let targetBlock = this.getNode(targetId);

    this.openProcessesModal(mapLink, sourceBlock, targetBlock);

  }

  addNode(id, name, type, node) {
    this.map.mapView.nodes[id] = {
      id: id,
      type: type,
      name: name,
      serverUrl: "localhost:8100", /* Default address */
      attributes: {}
    };
    let model = JSON.parse(this.map.mapView.content);
    model.nodes.push(node);
    this.map.mapView.content = JSON.stringify(model);
  }

  ngOnInit() {
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

    joint.shapes.devs.PMDragModel = joint.shapes.devs.Model.extend({

      markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><image/><text class="label"/><g class="inPorts"/><g class="outPorts"/></g>',
      portMarkup: '<g class="port port<%= id %>"><circle class="port-body"/><text class="port-label"/></g>',

      defaults: joint.util.deepSupplement({

        type: 'devs.PMDragModel',
        size: { width: 110, height: 84 },
        inPorts: [''],
        outPorts: [''],
        attrs: {
          '.body': { stroke: '#3c3e41', fill: '#2c2c2c', 'rx': 6, 'ry': 6 },
          '.label': { text: 'Command Line', 'ref-y': 0.83, 'y-alignment': 'middle', fill: '#f1f1f1', 'font-size': 13 },
          '.port-body': { r: 7.5, stroke: 'gray', fill: '#2c2c2c', magnet: 'active' },
          'image': {
            'ref-x': 34, 'ref-y': 30, ref: 'rect',
            width: 46, height: 34, 'y-alignment': 'middle',
            'x-alignment': 'middle', 'xlink:href': 'assets/img/agents-small-01.png'
          }
        }

      }, joint.shapes.devs.Model.prototype.defaults)
    });

    joint.shapes.devs.PMDragModelView = joint.shapes.devs.ModelView;

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
        let model = JSON.parse(this.map.mapView.content);
        model.links.push(link);
        this.map.mapView.content = JSON.stringify(model);
      }
    });

    this.paper.on('cell:pointerdblclick', (cellView, evt, x, y) => {
      if (!cellView.model.isLink())
        return;
      let link = cellView.model;
      let sourceId = link.get('source').id;
      let targetId = link.get('target').id;
      let mapLink = this.getLink(cellView.model.id);
      let sourceBlock = this.getNode(sourceId);
      let targetBlock = this.getNode(targetId);

      this.openProcessesModal(mapLink, sourceBlock, targetBlock);
    });
    this.graph.on('change:source change:target', (link) => {
      let sourceId = link.get('source').id;
      let targetId = link.get('target').id;

      if (targetId && sourceId) {
        this._currentLink = link;
      } else {
        this._currentLink = null;
      }

    });

    /* only needed for debug */
    window.setTimeout(() => {
      this.paperInit.emit({
        paper: this.paper,
        graph: this.graph,
        designerOps: this
      });
    }, 100);
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (changes['map'].currentValue != null && this.graph != null) {
      console.log(this.graph);
      this.loadMap();
    }
  }

  loadMap() {
    // Clear the graph (Genius .__.)
    this.graph.clear();
    try {

      // Wait 1s and add the cells    
      if (!this.map.mapView.content) {
        console.log("no content");
        console.log(this.map.mapView);
        console.log("content");
        return;
      }
      let model = JSON.parse(this.map.mapView.content);

      for (let i = 0; i < model.nodes.length; i++) {
        this.graph.addCell(model.nodes[i]);
      }

      for (let i = 0; i < model.links.length; i++) {
        this.graph.addCell(model.links[i]);
      }

      this.map.isLocked = (this.map.versionIndex != this.map.versions.length - 1);

    } catch (e) {
      console.log(e);
    }
  }

}
