import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { MapService } from '../../../../../shared/services/map.service';

import * as _ from 'lodash';

export class UpdateMapComponentWindowData extends BSModalContext {
  constructor(public mapName: string) {
    super();
    this.size = 'sm';
    this.isBlocking = true;
    this.showClose = true;
    this.keyboard = 27; /* close on escape */
    this.mapName = mapName;
  }
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styleUrls: ['update-map.component.css'],
  templateUrl: 'update-map.component.html',
  providers: [MapService]
})
export class UpdateMapComponentWindow implements ModalComponent<UpdateMapComponentWindowData> {
  context: UpdateMapComponentWindowData;
  public currProject: any;
  public mapName: any;

  constructor(private mapService: MapService,
              public dialog: DialogRef<UpdateMapComponentWindowData>,
              public modal: Modal) {

    this.context = dialog.context;
    this.mapName = this.context.mapName;
  }

  closeWindow() {
    console.log('closing window');
    this.dialog.close();
  }

  update() {
      this.dialog.close(this.mapName);
  };

}
