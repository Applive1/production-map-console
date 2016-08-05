import { Component, ViewEncapsulation } from '@angular/core';

import {DialogRef, ModalComponent} from '../../../../../node_modules/angular2-modal';
import { BSModalContext } from '../../../../../node_modules/angular2-modal/plugins/bootstrap/index';

import { Modal } from 'angular2-modal/plugins/bootstrap';

import { ActionsComponentWindowData, ActionsComponentWindow } from '../actions';

export class ProcessesComponentWindowData extends BSModalContext {
    constructor(public num1: number, public num2: number) {
        super();
        this.size = 'lg';
    }
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
    selector: 'modal-content',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./../../../../assets/css/bootstrap.css', 'processes.component.css'],
    templateUrl: 'processes.component.html'
})
export class ProcessesComponentWindow implements ModalComponent<ProcessesComponentWindowData> {
    context: ProcessesComponentWindowData;

    link: any = {};

    constructor(public dialog: DialogRef<ProcessesComponentWindowData>, public modal: Modal) {
        this.context = dialog.context;
    }

    closeWindow() {
        this.dialog.close();
    }

    addAction() {
        this.modal.open(ActionsComponentWindow, new ActionsComponentWindowData(2, 3));
    }

}
