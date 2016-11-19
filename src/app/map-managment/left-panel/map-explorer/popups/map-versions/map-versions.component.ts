import { Component } from '@angular/core';
import { overlayConfigFactory } from 'angular2-modal';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { MapExecutionsComponent, MapExecutionsComponentData } from '../map-executions/map-executions.component';

import { MapService } from '../../../../../shared/services/map.service';

import * as _ from 'lodash';

export class MapVersionsComponentData extends BSModalContext {
  constructor(public map: any) {
    super();
    this.size = 'sm';
    this.isBlocking = true;
    this.showClose = true;
    this.keyboard = 27; /* close on escape */
  }
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styleUrls: ['map-versions.component.css'],
  templateUrl: 'map-versions.component.html',
  providers: [MapService]
})
export class MapVersionsComponent implements ModalComponent<MapVersionsComponentData> {
  context: MapVersionsComponentData;
  public map: any;

  constructor(private mapService: MapService,
              public dialog: DialogRef<MapVersionsComponentData>,
              public modal: Modal) {

    this.context = dialog.context;
    this.map = this.context.map;
  }

  openExecutions(version) {
    this.modal.open(MapExecutionsComponent, overlayConfigFactory(new MapExecutionsComponentData(this.map, version), BSModalContext));
  }

  closeWindow() {
    console.log('closing window');
    this.dialog.close();
  }
}


