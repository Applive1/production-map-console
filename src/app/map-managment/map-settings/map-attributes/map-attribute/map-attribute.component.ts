import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-map-attribute',
  templateUrl: './map-attribute.component.html',
  styleUrls: ['./map-attribute.component.css']
})
export class MapAttributeComponent implements OnInit {

  @Input() attribute: any;
  editableAttribute: any = {};
  @Output() deleteAttribute = new EventEmitter();
  editMode: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log(this.attribute);
    if (!this.attribute.name) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }

  edit() {
    this.editableAttribute = _.cloneDeep(this.attribute);
    this.editMode = true;
  }

  save() {
    this.editMode = false;
    /* clone without creating new object */
    this.attribute.name = this.editableAttribute.name;
    this.attribute.type = this.editableAttribute.type;
    this.attribute.value = this.editableAttribute.value;
  }

  cancel() {
    this.editMode = false;
  }

  delete() {
    this.deleteAttribute.emit(this.attribute);
  }

}
