import { Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';

import { Modal } from 'angular2-modal/plugins/bootstrap';

// import { ProcessesComponentWindowData, ProcessesComponentWindow } from '/';

import * as _ from 'lodash';

import { ProcessesComponentWindow, ProcessesComponentWindowData } from "../processes/processes.component";

export class NewProcessComponentWindowData extends BSModalContext {
  constructor(public link: any, public src: any, public dest: any) {
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
  styleUrls: ['../processes/processes.component.css'],
  templateUrl: 'new-process.component.html'
})
export class NewProcessComponentWindow implements ModalComponent<NewProcessComponentWindowData> {
  context: NewProcessComponentWindowData;
  public link: any;
  public src: any;
  public dest: any;
  public process: any;

  constructor(public dialog: DialogRef<NewProcessComponentWindowData>, public modal: Modal) {
    this.context = dialog.context;
    this.link = this.context.link;
    this.src = this.context.src;
    this.dest = this.context.dest;
    this.process = {
      name: '',
      description: '',
      order: 0,
      default_execution: false,
      mandatory: false,
      actions: [],
      result: '',
      condition: false
    };
  }

  closeWindow() {
    this.dialog.close();
  }

  createProcess() {
    this.link.processes.push(this.process);
    this.closeWindow();
    this.modal.open(ProcessesComponentWindow, new ProcessesComponentWindowData(this.link, this.src, this.dest, this.process));
  };

}
