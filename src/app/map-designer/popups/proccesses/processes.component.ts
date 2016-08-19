import { Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from '../../../../../node_modules/angular2-modal';
import { BSModalContext } from '../../../../../node_modules/angular2-modal/plugins/bootstrap/index';

import { Modal } from 'angular2-modal/plugins/bootstrap';

import { ActionsComponentWindowData, ActionsComponentWindow } from '../actions';

import * as _ from 'lodash';

export class ProcessesComponentWindowData extends BSModalContext {
    constructor(public link: any, public src: any, public dest: any) {
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
        this.modal.open(ActionsComponentWindow, new ActionsComponentWindowData(action, this.dest.type));
        this.currentProcess.actions.push(action);
    }

    editAction(action) {
        this.modal.open(ActionsComponentWindow, new ActionsComponentWindowData(action, this.dest.type));
    }

    addProcess() {
        this.link.processes.push(_.cloneDeep(this.currentProcess));
        this.newProc();
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

}
