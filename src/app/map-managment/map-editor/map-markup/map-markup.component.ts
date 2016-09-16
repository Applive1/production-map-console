import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-markup',
  templateUrl: './map-markup.component.html',
  styleUrls: ['./map-markup.component.css']
})
export class MapMarkupComponent implements OnInit {

  @Input() map: any;

  constructor() { }

  ngOnInit() {
  }

}
