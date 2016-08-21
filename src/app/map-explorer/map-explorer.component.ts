import { Component, OnInit, Input } from '@angular/core';
import { TreeComponent } from 'angular2-tree-component';


@Component({
  moduleId: module.id,
  selector: 'pm-map-explorer',
  templateUrl: 'map-explorer.component.html',
  styleUrls: ['../shared/css/map-bar.css', 'map-explorer.component.css'],
  directives: [TreeComponent]
})
export class MapExplorerComponent implements OnInit {

  @Input() projectsTree: any = [];

  constructor() {
    this.projectsTree = [];
  }

  ngOnInit() {

  }

}
