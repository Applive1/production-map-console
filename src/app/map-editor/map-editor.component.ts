import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapDesignerComponent } from '../map-designer/map-designer.component';
import { MapMarkupComponent } from '../map-markup/map-markup.component';
import { MapCodeEditorComponent } from '../map-code-editor/map-code-editor.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { MapService } from '../shared/services/map.service';
import { Response } from '@angular/http';
import { MapReportComponentWindowData, MapReportComponentWindow } from '../map-report';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import * as _ from 'lodash';
import * as jsonpatch from 'jsonpatch';

@Component({
  moduleId: module.id,
  selector: 'pm-map-editor',
  templateUrl: 'map-editor.component.html',
  styleUrls: ['map-editor.component.css'],
  directives: [MapDesignerComponent, MapMarkupComponent, MapCodeEditorComponent, NgSwitch, NgSwitchCase],
  providers: [MapService]
})
export class MapEditorComponent implements OnInit {

  @Output() informOuterLayer = new EventEmitter();
  public currentPanel: number = 0;
  public currentMap: any = {};

  constructor(public modal: Modal, private mapService: MapService) {
  }

  ngOnInit() {
    this.mapService.getMapById('5793e54b92f88d2034e94810').subscribe((map) => {
      this.currentMap = map;
      this.currentMap.versionIndex = map.versions.length - 1;
      this.loadMapVersion(this.currentMap.versionIndex);
    });
  }

  openReport() {
    this.modal.open(MapReportComponentWindow, new MapReportComponentWindowData(1, 2));
  }

  selectPanel(panelId: number){
    this.currentPanel = panelId;
  }

  updateManagmentPanel($event: any) {
    this.informOuterLayer.emit($event);
  }

  loadMapVersion(index) {
    this.currentMap.mapView = _.cloneDeep(this.currentMap.structure);
    this.currentMap.versionIndex = index;

    let versions = _.cloneDeep(this.currentMap.versions);
    for (let i = 0; i <= index; i++) {
      if (this.currentMap.versions[i].patches) {
        jsonpatch.apply_patch(this.currentMap.mapView, versions[i].patches);
      }
    }
  }

  executeMap(map) {
    this.mapService.executeMap(map, []);
  }
}
