import { Component, ViewEncapsulation } from '@angular/core';

import {DialogRef, ModalComponent} from '../../../../../node_modules/angular2-modal';
import { BSModalContext } from '../../../../../node_modules/angular2-modal/plugins/bootstrap/index';

export class ActionsComponentWindowData extends BSModalContext {
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
    styleUrls: ['actions.component.css'],
    templateUrl: 'actions.component.html'
})
export class ActionsComponentWindow implements ModalComponent<ActionsComponentWindowData> {
    context: ActionsComponentWindowData;

    link: any = {};

    constructor(public dialog: DialogRef<ActionsComponentWindowData>) {
        this.context = dialog.context;
    }

    closeWindow() {
        this.dialog.close();
    }

}
