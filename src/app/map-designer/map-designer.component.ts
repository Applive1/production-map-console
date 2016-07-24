import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as joint from 'jointjs';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'pm-map-designer',
  templateUrl: 'map-designer.component.html',
  styleUrls: ['map-designer.component.css']
})
export class MapDesignerComponent implements OnInit {

  @Output() paperInit = new EventEmitter();
  public graph: any;
  public paper: any;

  constructor() {}

  ngOnInit() {
    // Canvas where sape are dropped
     this.graph = new joint.dia.Graph;
      this.paper = new joint.dia.Paper({
        el: $('#paper'),
        model: this.graph
      });

    /* only needed for debug */
    window.setTimeout(() => {
      this.paperInit.emit({
        paper: this.paper,
        graph: this.graph
      });
    }, 100);
  }

}
