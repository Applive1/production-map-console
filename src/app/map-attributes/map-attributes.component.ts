import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { MapAttributeComponent } from '../map-attribute/map-attribute.component';

@Component({
  moduleId: module.id,
  selector: 'pm-map-attributes',
  templateUrl: 'map-attributes.component.html',
  styleUrls: ['map-attributes.component.css'],
  directives: [MapAttributeComponent]
})
export class MapAttributesComponent implements OnInit, OnChanges {

  @Input() map: any;

  constructor() {
    this.map = {
      mapView: {
        attributes: []
      }
    };
  }

  ngOnInit() {
    if (!this.map || !this.map.mapView || !this.map.attributes) {
      this.map = {
        mapView: {
          attributes: []
        }
      };
    }
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

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (changes['map'].currentValue != null) {
      this.map = {
        mapView: {
          attributes: []
        }
      };
    }
  }

  deleteAttribute($event, index) {
    this.map.mapView.attributes.splice(index, 1);
  }

}
