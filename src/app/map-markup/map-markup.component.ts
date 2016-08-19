import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pm-map-markup',
  templateUrl: 'map-markup.component.html',
  styleUrls: ['map-markup.component.css']
})
export class MapMarkupComponent implements OnInit {

  @Input() map: any = {};

  constructor() {

  }

  ngOnInit() {
  }

}
