import { Component } from '@angular/core';
import { overlayConfigFactory } from 'angular2-modal';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { ExecutionReportComponent, ExecutionReportComponentWindowData } from '../../execution-report/execution-report.component';

import { MapService } from '../../../../../shared/services/map.service';

import * as _ from 'lodash';

export class MapExecutionsComponentData extends BSModalContext {
  constructor(public map: any, public version) {
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
  styleUrls: ['map-executions.component.css'],
  templateUrl: 'map-executions.component.html',
  providers: [MapService]
})
export class MapExecutionsComponent implements ModalComponent<MapExecutionsComponentData> {
  context: MapExecutionsComponentData;
  public map: any;
  public version: any;

  constructor(private mapService: MapService,
              public dialog: DialogRef<MapExecutionsComponentData>,
              public modal: Modal) {

    this.context = dialog.context;
    this.map = this.context.map;
    this.version = dialog.context.version;
  }

  openExecution(execution) {
    this.modal.open(ExecutionReportComponent, overlayConfigFactory(new ExecutionReportComponentWindowData(this.map, execution), BSModalContext));
  }

  closeWindow() {
    console.log('closing window');
    this.dialog.close();
  }
}
