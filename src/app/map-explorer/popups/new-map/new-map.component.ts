import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from '../../../../../node_modules/angular2-modal';
import { BSModalContext } from '../../../../../node_modules/angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { MapService } from "../../../shared/services/map.service";

import * as _ from 'lodash';

export class NewMapComponentWindowData extends BSModalContext {
  constructor(public project: any) {
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
  styleUrls: ['new-map.component.css'],
  templateUrl: 'new-map.component.html',
  providers: [MapService]

})
export class NewMapComponentWindow implements ModalComponent<NewMapComponentWindowData> {
  context: NewMapComponentWindowData;
  public currProject: any;
  public mapName: any;

  constructor(private mapService: MapService,
              public dialog: DialogRef<NewMapComponentWindowData>,
              public modal: Modal) {

    this.context = dialog.context;
    this.currProject = this.context.project;
    this.mapName = '';
  }

  closeWindow() {
    this.dialog.close();
  }

  create() {
    this.mapService.createMap(this.mapName, this.currProject.id).subscribe((map) => {
      this.dialog.close(map);
    });
  };

}
