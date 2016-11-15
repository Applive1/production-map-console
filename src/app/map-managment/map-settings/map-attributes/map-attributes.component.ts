import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { AttributeWindow, AttributeWindowData } from '../../../shared/popups/attribute-window/attribute-window.component';


@Component({
  selector: 'app-map-attributes',
  templateUrl: './map-attributes.component.html',
  styleUrls: ['./map-attributes.component.css']
})
export class MapAttributesComponent implements OnInit, OnChanges {

  @Input() map: any;

  constructor(public modal: Modal) {
    this.map = {
      mapView: {
        attributes: []
      }
    };
  }

  initAttributes() {
    if (!this.map || !this.map.mapView || !this.map.mapView.attributes) {
      this.map = {
        mapView: {
          attributes: []
        }
      };
    }
  }

  ngOnInit() {
    this.initAttributes();
  }

  addAttribute() {
    let attribute = {
      type: 'String',
      name: '',
      value: ''
    };
    if (!this.map.mapView.attributes) {
      this.map.mapView.attributes = [];
    }
    this.modal.open(AttributeWindow, overlayConfigFactory(new AttributeWindowData(attribute), BSModalContext))
    .then((data) => {
      return data.result;
    })
    .then((attr) => {
      this.map.mapView.attributes.push(attr);
    });
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (changes['map'].currentValue != null) {
      this.initAttributes();
    }
  }

  deleteAttribute($event, index) {
    this.map.mapView.attributes.splice(index, 1);
  }

}
