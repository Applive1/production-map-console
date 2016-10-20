import { Component } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ConstsService } from '../../../shared/services/consts.service';

import * as _ from 'lodash';

export class MessagePopupComponentData extends BSModalContext {
  message: string;
  constructor(message: string) {
    super();
    this.isBlocking = true;
    this.showClose = true;
    this.keyboard = 27; /* close on escape */
    this.size = 'lg';
    this.message = message;
  }
}

@Component({
  selector: 'modal-content',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.css']
})
export class MessagePopupComponent implements ModalComponent<MessagePopupComponentData> {
  context: MessagePopupComponentData;
  message: string;

  constructor(public dialog: DialogRef<MessagePopupComponentData>, public modal: Modal, private constsService: ConstsService) {
    this.context = dialog.context;
    this.message = this.context.message;
  }

  closeWindow() {
    this.dialog.close();
  }

}
