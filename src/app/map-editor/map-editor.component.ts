import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MapDesignerComponent } from '../map-designer/map-designer.component';
import { MapMarkupComponent } from '../map-markup/map-markup.component';
import { MapCodeEditorComponent } from '../map-code-editor/map-code-editor.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { MapService } from '../shared/services/map.service';
import { Response } from '@angular/http';
import { MapReportComponentWindowData, MapReportComponentWindow } from '../map-report';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import * as _ from 'lodash';

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
  @Output() onExecution = new EventEmitter();
  @Input() map: any = {};

  public currentPanel: number = 0;

  constructor(public modal: Modal, private mapService: MapService) {
  }

  ngOnInit() {
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

  executeMap(map) {
    this.mapService.executeMap(map, []).subscribe((result) => {
      this.onExecution.emit(result.res);
      this.map.versions[this.map.versionIndex].executions.push(result.resObj);
    });
  }
}