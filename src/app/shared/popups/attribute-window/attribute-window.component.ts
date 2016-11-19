import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import * as _ from 'lodash';

export class AttributeWindowData extends BSModalContext {
  constructor(public attribute: any) {
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
  styleUrls: ['attribute-window.component.css'],
  templateUrl: 'attribute-window.component.html'
})
export class AttributeWindow implements ModalComponent<AttributeWindowData> {
  context: AttributeWindowData;
  public attr: any;
  public types: string[];

  constructor(public dialog: DialogRef<AttributeWindowData>,
              public modal: Modal) {

    this.context = dialog.context;
    this.attr = _.cloneDeep(this.context.attribute);
    this.types = ['String', 'List'];
  }

  closeWindow() {
    console.log('closing window');
    this.dialog.close();
  }

  apply() {
    this.dialog.close(this.attr);
  };
}
