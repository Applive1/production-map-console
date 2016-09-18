import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, ViewContainerRef, ViewChild, OnChanges, SimpleChange } from '@angular/core';

import * as $ from 'jquery';
import * as _ from 'lodash';
import * as joint from 'jointjs';

import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ContextMenuService } from 'angular2-contextmenu';

import { MapService } from '../../../shared/services/map.service';
import { ProcessesComponentWindowData, ProcessesComponentWindow } from './processes/processes.component';
import { NewProcessComponentWindowData, NewProcessComponentWindow } from './new-process/new-process.component';

@Component({
  selector: 'app-map-designer',
  templateUrl: './map-designer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../node_modules/jointjs/css/layout.css',
              '../../../../../node_modules/jointjs/css/themes/default.css',
              './map-designer.component.css']
})
export class MapDesignerComponent implements OnInit, OnChanges {

  @Output() paperInit = new EventEmitter();
  @Input() map: any = {};

  public graph: any;
  public paper: any;
  private _currentLink: any;
  private _map: any;
  private reconnectingLink: boolean = false;

  constructor(public modal: Modal, private mapService: MapService, private contextMenuService: ContextMenuService) {
    this._currentLink = null;
    this.reconnectingLink = false;
  }

  openProcessesModal(link: any, src: any, dest: any) {
    this.modal.open(ProcessesComponentWindow, overlayConfigFactory(new ProcessesComponentWindowData(link, src, dest), BSModalContext));
  }

  openNewProcessModal(link: any, src: any, dest: any) {
    this.modal.open(NewProcessComponentWindow, overlayConfigFactory(new NewProcessComponentWindowData(link, src, dest), BSModalContext));
  }

  getLink(linkId: any) {
    let res = {};
    res = _.find(this.map.mapView.links, (link: any) => { return link.id === linkId; });
    return res;
  }

  svgCheckPort(portType, elem) {
    return elem.getAttribute('port').startsWith(portType);
  }

  getNode(blockId) {
    let res = {};
    res = _.find(this.map.mapView.nodes, (node: any) => {
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

    this.openNewProcessModal(mapLink, sourceBlock, targetBlock);

  }

  addNode(id, name, type, node) {
    let truncatedName = _.replace(name, ' ', ''); /* TODO: replace all unallowed charcters */
    let nameIndex = _.keys(this.map.mapView.nodes).length;
    truncatedName = truncatedName + nameIndex;
    this.map.mapView.nodes[truncatedName] = {
      id: id,
      type: type,
      name: name,
      serverUrl: "localhost:8100", /* Default address */
      attributes: {}
    };
    node.attributes.attrs['.label'].text = name + '-' + nameIndex;
    this.graph.addCell(node);
    this.updateMapViewContentGraph();
  }

  ngOnInit() {
    this._currentLink = null;
    this.reconnectingLink = false;
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
      if (cellView.model.isLink()) {
        if (this._currentLink && !this.reconnectingLink) {
          let link = this._currentLink;
          let sourceId = link.get('source').id;
          let targetId = link.get('target').id;

          this.connectNodes(link.id, sourceId, targetId);
          delete this._currentLink.newProcess;
          this._currentLink = null;
        } else if (this.reconnectingLink) {
          this.reconnectingLink = false;
        }
      }
      this.updateMapViewContentGraph();
    });

    this.paper.on('cell:contextmenu', (cellView, evt) => {
      this.openContextMenu(evt, cellView);
    });

    this.paper.on('cell:pointerdown', (cellView, evt, x, y) => {
      /* if we changing existing link we want to save its process because only target block is related when using links */
      if (cellView.model.isLink()) {
        let mapLink = this.getLink(cellView.model.id);
        if (mapLink) {
          this.reconnectingLink = true;
          this._currentLink = cellView.model;
        }
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

    this.loadMap();
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

      this.graph.fromJSON(JSON.parse(this.map.mapView.content));

    } catch (e) {
      console.log(e);
    }
  }

  /* when changing the graph we want to update the inner content that saves the graph json */
  updateMapViewContentGraph() {
    let res = this.graph.toJSON();
    res = JSON.stringify(res);
    this.map.mapView.content = JSON.stringify(this.graph.toJSON());
  }

  openContextMenu($event, cellView) {
    console.log($event);
    this.contextMenuService.show.next({
      actions: [
        {
          html: () => `delete`,
          click: (item) => this.deleteCellView(item)
        }
      ],
      event: $event,
      item: cellView,
    });
  }

  deleteCellView(cellView) {
    let id = cellView.model.id;
    let cell = this.graph.getCell(id);
    cellView.remove();
    if (cell.isLink()) {
      this.deleteLink(this.getLink(id));
    } else {
      this.deleteNode(this.getNode(id));
    }
    this.updateMapViewContentGraph();
  }

  deleteLink(link) {
    _.remove(this.map.mapView.links, (l: any) => { return l.id === link.id; });
  }

  deleteNode(node) {
    _.forEach(this.map.mapView.nodes, (cNode, key) => {
      if (node.id === cNode.id) {
        delete this.map.mapView.nodes[key];
      }
    });
    this.removeNodeLinks(node.id);
  }

  /* we use this function instead of the regular graph.removeLinks because we want to remove
     them from the mapView. */
  removeNodeLinks(nodeId) {
    this.graph.getLinks().forEach((link) => {
      if (this.isLinkInvalid(nodeId, link)) {
        link.remove();
        _.remove(this.map.mapView.links, (lnk: any) => { return lnk.id === link.id; });
      }
    });
  }

  /* checks if the link is directed to the deleted element */
  isLinkInvalid(nodeId, link) {
    if (link.prop('source/id') && link.prop('target/id')) {
      return (link.prop('target/id') === nodeId);
    }
    return true;
  }

}
