import { Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ConstsService } from '../../../shared/services/consts.service';

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

@Component({
  selector: 'modal-content',
  templateUrl: './add-dedicated-agent.component.html',
  styleUrls: ['./add-dedicated-agent.component.css']
})
export class AddDedicatedAgentComponentWindow implements ModalComponent<AddDedicatedAgentComponentWindowData> {
  context: AddDedicatedAgentComponentWindowData;
  error: string;
  dedicateAgents: any[];
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;
  hasAnotherDropZoneOver: boolean = false;

  constructor(public dialog: DialogRef<AddDedicatedAgentComponentWindowData>, public modal: Modal, private constsService: ConstsService) {
    this.context = dialog.context;
    this.dedicateAgents = [];
    this.error = '';
    this.uploader = new FileUploader({ url: this.constsService.getServerUrl() });
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
