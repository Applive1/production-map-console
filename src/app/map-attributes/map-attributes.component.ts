import { Component, OnInit, Input } from '@angular/core';
import { MapAttributeComponent } from '../map-attribute/map-attribute.component';

@Component({
  moduleId: module.id,
  selector: 'pm-map-attributes',
  templateUrl: 'map-attributes.component.html',
  styleUrls: ['map-attributes.component.css'],
  directives: [MapAttributeComponent]
})
export class MapAttributesComponent implements OnInit {

  @Input() map: any = {};

  constructor() {}

  ngOnInit() {
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
    this.map.mapView.attributes.push(attribute);
  }

  deleteAttribute($event, index) {
    this.map.mapView.attributes.splice(index, 1);
  }

}
