import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import * as _ from 'lodash';

import { AttributeWindow, AttributeWindowData } from '../../../../shared/popups/attribute-window/attribute-window.component';

@Component({
  selector: 'app-map-attribute',
  templateUrl: './map-attribute.component.html',
  styleUrls: ['./map-attribute.component.css']
})
export class MapAttributeComponent implements OnInit {

  @Input() attribute: any;
  @Output() deleteAttribute = new EventEmitter();

  constructor(public modal: Modal) {
  }

  ngOnInit() {
  }

  edit() {
    this.modal.open(AttributeWindow, overlayConfigFactory(new AttributeWindowData(this.attribute), BSModalContext))
    .then((data) => {
      return data.result;
    })
    .then((attr) => {
      this.attribute = _.cloneDeep(attr);
    });
  }

  delete() {
    this.deleteAttribute.emit(this.attribute);
  }

}
