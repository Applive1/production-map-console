import { Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import * as _ from 'lodash';

export class AddDedicatedAgentComponentWindowData extends BSModalContext {
  constructor() {
    super();
    this.isBlocking = true;
    this.showClose = true;
    this.keyboard = 27; /* close on escape */
    this.size = 'lg';
  }
}

const URL = 'http://localhost:8080';

@Component({
  selector: 'modal-content',
  templateUrl: './add-dedicated-agent.component.html',
  styleUrls: ['./add-dedicated-agent.component.css']
})
export class AddDedicatedAgentComponentWindow implements ModalComponent<AddDedicatedAgentComponentWindowData> {
  context: AddDedicatedAgentComponentWindowData;
  error: string;
  dedicateAgents: any[];
  uploader: FileUploader = new FileUploader({ url: URL });
  hasBaseDropZoneOver: boolean = false;
  hasAnotherDropZoneOver: boolean = false;

  constructor(public dialog: DialogRef<AddDedicatedAgentComponentWindowData>, public modal: Modal) {
    this.context = dialog.context;
    this.dedicateAgents = [];
    this.error = '';
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }


  closeWindow() {
    this.dialog.close();
  }

}
