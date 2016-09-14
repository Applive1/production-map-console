import { Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from '../../../../node_modules/angular2-modal';
import { BSModalContext } from '../../../../node_modules/angular2-modal/plugins/bootstrap/index';

import { Modal } from 'angular2-modal/plugins/bootstrap';

// import { ProcessesComponentWindowData, ProcessesComponentWindow } from '/';

import * as _ from 'lodash';

export class msgContentComponentWindowData extends BSModalContext {
    constructor(public msg: any) {
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
    styleUrls: ['msg-content-popup.component.css'],
    templateUrl: 'msg-content-popup.component.html'
})
export class msgContentComponentWindow implements ModalComponent<msgContentComponentWindowData> {
    context: msgContentComponentWindowData;
    public msg: any;

    constructor(public dialog: DialogRef<msgContentComponentWindowData>, public modal: Modal) {
        this.context = dialog.context;
        this.msg = this.context.msg;
    }

    closeWindow() {
        this.dialog.close();
    }

}
