import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from '../../../../../node_modules/angular2-modal';
import { BSModalContext } from '../../../../../node_modules/angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import { ProjectService } from "../../../shared/services/project.service";

import * as _ from 'lodash';
import {MapService} from "../../../shared/services/map.service";

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
  providers: [ProjectService, MapService]

})
export class NewMapComponentWindow implements OnInit, ModalComponent<NewMapComponentWindowData> {
  context: NewMapComponentWindowData;
  public project: any;
  public map: any;

  constructor(private projectService: ProjectService,
              private mapService: MapService,
              public dialog: DialogRef<NewMapComponentWindowData>,
              public modal: Modal) {
    this.context = dialog.context;
    this.project = this.context.project;
    this.map = {
      name: '',
    };
  }

  ngOnInit() {
  }

  closeWindow() {
    this.dialog.close();
  }

  create() {
    this.mapService.createMap(this.map.name, this.project.id).subscribe((map) => {
      this.dialog.close(map);
    });
  };

}
