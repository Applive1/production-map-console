import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MapDesignerComponent } from '../map-designer/map-designer.component';
import { MapMarkupComponent } from '../map-markup/map-markup.component';
import { MapCodeEditorComponent } from '../map-code-editor/map-code-editor.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { MapService } from '../shared/services/map.service';
import { Response } from '@angular/http';
import { MapReportComponentWindowData, MapReportComponentWindow } from '../map-report';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { LibPMService } from '../shared/services/libpm.service';

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'pm-map-editor',
  templateUrl: 'map-editor.component.html',
  styleUrls: ['map-editor.component.css'],
  directives: [MapDesignerComponent, MapMarkupComponent, MapCodeEditorComponent, NgSwitch, NgSwitchCase],
  providers: [LibPMService]
})
export class MapEditorComponent implements OnInit {

  @Output() informOuterLayer = new EventEmitter();
  @Output() onExecution = new EventEmitter();
  @Input() map: any = {};

  public currentPanel: number = 0;

  constructor(public modal: Modal, private mapService: MapService, private libpmService: LibPMService) {
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
    this.mapService.saveMap(map).subscribe((result) => {
      if (result.date) {
        map.versions.push(result);
        map.versionIndex++;

        /* execute the map */
        this.mapService.executeMap(map, []).subscribe((mapResult) => {
          this.onExecution.emit(mapResult.res);
          map.versions[map.versionIndex].executions.push(result.resObj);
          //map.versions[map.versionIndex].status = consts.MapRunStatuses.Done;
        });
      }
      console.log(result);
    });
  }

  saveMap(map) {
      this.mapService.saveMap(map).subscribe((result) => {
        if (result.date) {
          map.versions.push(result);
          map.versionIndex++;
        }
        console.log(result);
      });
  }
}
