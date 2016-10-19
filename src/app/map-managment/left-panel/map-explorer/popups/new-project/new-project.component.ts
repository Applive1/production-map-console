import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import {ProjectService} from "../../../../../shared/services/project.service";

import * as _ from 'lodash';

export class NewProjectComponentWindowData extends BSModalContext {
  constructor() {
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
  styleUrls: ['new-project.component.css'],
  templateUrl: 'new-project.component.html',
  providers: [ProjectService]

})
export class NewProjectComponentWindow implements ModalComponent<NewProjectComponentWindowData> {
  context: NewProjectComponentWindowData;
  public project: any;

  constructor(private projectService: ProjectService,
              public dialog: DialogRef<NewProjectComponentWindowData>,
              public modal: Modal) {
    this.context = dialog.context;

    this.project = {
      name: '',
    };
  }

  closeWindow() {
    console.log('closing windows!');
    this.dialog.close();
  }

  create() {
    this.projectService.createProject(this.project.name).subscribe((project) => {
      this.dialog.close(project);
    });

  };

}
