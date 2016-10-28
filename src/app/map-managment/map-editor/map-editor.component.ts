import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

import { Modal } from 'angular2-modal/plugins/bootstrap';

import { MapService } from '../../shared/services/map.service';
import { LibPMService } from '../../shared/services/libpm.service';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.css'],
  providers: [LibPMService]
})
export class MapEditorComponent implements OnInit {

  @Output() informOuterLayer = new EventEmitter();
  @Output() onExecution = new EventEmitter();
  @Input() map: any = {};

  public currentPanel: number = 0;
  public executingMap: boolean = false;

  constructor(public modal: Modal, private mapService: MapService, private libpmService: LibPMService) {
  }

  ngOnInit() {
    this.executingMap = false;
  }

  selectPanel(panelId: number) {
    this.currentPanel = panelId;
  }

  updateManagmentPanel($event: any) {
    this.informOuterLayer.emit($event);
  }

  executeMap(map) {
    if (this.executingMap) {
      return;
    }
    this.executingMap = true;
    this.mapService.saveMap(map).subscribe((result) => {
      if (result.date) {
        map.versions.push(result);
        map.versionIndex++;
        this.mapService.loadMapVersion(this.map, this.map.versionIndex);
      }
      /* execute the map */
      this.mapService.executeMap(map, []).subscribe((mapResult) => {
        map.versions[map.versionIndex].executions.push(mapResult.resObj);
        this.onExecution.emit(mapResult.res);
        /* map.versions[map.versionIndex].status = consts.MapRunStatuses.Done; */
        console.log(mapResult);
        this.executingMap = false;
      });
    });
  }

  saveMap(map) {
    this.executingMap = true;
    this.mapService.saveMap(map).subscribe((result) => {
      if (result.date) {
        map.versions.push(result);
        map.versionIndex++;
        this.mapService.loadMapVersion(this.map, this.map.versionIndex);
      }
      console.log(result);
      this.executingMap = false;
    });
  }

}
