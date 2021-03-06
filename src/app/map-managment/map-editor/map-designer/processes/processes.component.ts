import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { ActionsComponentWindowData, ActionsComponentWindow } from '../action/action.component';
import { NewProcessComponentWindowData, NewProcessComponentWindow } from '../new-process/new-process.component';
import * as _ from 'lodash';

export class ProcessesComponentWindowData extends BSModalContext {
  constructor(public link: any, public src: any, public dest: any, public currProcess?: any) {
    super();
    this.size = 'lg';
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
  styleUrls: ['processes.component.css'],
  templateUrl: 'processes.component.html'
})
export class ProcessesComponentWindow implements ModalComponent<ProcessesComponentWindowData> {
  context: ProcessesComponentWindowData;
  public link: any;
  public src: any;
  public dest: any;
  public currentProcess: any;

  constructor(public dialog: DialogRef<ProcessesComponentWindowData>, public modal: Modal) {
    this.context = dialog.context;
    this.link = this.context.link;
    this.src = this.context.src;
    this.dest = this.context.dest;

    // in case of created process from previous pop us
    if (this.context.currProcess) {
      this.currentProcess = this.context.currProcess;
    }
    // new link
    else {
      if(this.link.processes) {
        this.currentProcess = this.link.processes[0];
      } else {
        // no processes - this is a placeholder
        this.currentProcess = {
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
    }
  }

  closeWindow() {
    this.dialog.close();
  }

  newProc() {
    this.currentProcess = {
      name: '',
      description: '',
      order: 0,
      default_execution: false,
      mandatory: false,
      actions: [],
      result: ''
    };
  }

  addAction() {
    let action = {
      server: {},
      method: '',
      params: {},
      name: '',
      timeout: 0,
      timeunit: '1',
      retries: 0,
      mandatory: false,
      suspend: false,
      result: ''
    };
    this.modal.open(ActionsComponentWindow, overlayConfigFactory(new ActionsComponentWindowData(action, this.dest.type), BSModalContext));
    this.currentProcess.actions.push(action);
  }

  editAction(action) {
    this.modal.open(ActionsComponentWindow, overlayConfigFactory(new ActionsComponentWindowData(action, this.dest.type), BSModalContext));
  }

  openNewProcessModal(link: any, src: any, dest: any) {
    this.closeWindow();
    this.modal.open(NewProcessComponentWindow, overlayConfigFactory(new NewProcessComponentWindowData(link, src, dest), BSModalContext));
  }

  addProcess() {
    this.openNewProcessModal(this.link, this.src, this.dest);
  };

  moveActionUp(actionIndex) {
    let prevAction = this.currentProcess.actions[actionIndex - 1];
    this.currentProcess.actions[actionIndex - 1] = this.currentProcess.actions[actionIndex];
    this.currentProcess.actions[actionIndex] = prevAction;
  }

  moveActionDown(actionIndex) {
    var nextAction = this.currentProcess.actions[actionIndex + 1];
    this.currentProcess.actions[actionIndex + 1] = this.currentProcess.actions[actionIndex];
    this.currentProcess.actions[actionIndex] = nextAction;
  }

  deleteAction(actionIndex) {
    this.currentProcess.actions.splice(actionIndex, 1);
  }

  deleteProcess(process) {
    _.remove(this.link.processes, (proc: any) => { return process.name === proc.name; });
    this.newProc();
  }

}
