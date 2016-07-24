import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MapExplorerComponent } from '../map-explorer/map-explorer.component';
import { MapSettingsComponent } from '../map-settings/map-settings.component';
import { MapEditorComponent } from '../map-editor/map-editor.component';
import { MapToolboxComponent } from '../map-toolbox/map-toolbox.component';

@Component({
  moduleId: module.id,
  selector: 'pm-map-managment',
  templateUrl: 'map-managment.component.html',
  styleUrls: ['map-managment.component.css'],
  directives: [
                MessagesComponent, MapExplorerComponent, MapSettingsComponent,
                MapEditorComponent, MapToolboxComponent
              ]
})
export class MapManagmentComponent implements OnInit {

  public innerPaper: any = null;
  public innerGraph: any = null;

  constructor() {}

  ngOnInit() {
      console.log('Loaded Map Managment component');
  }

  updateToolBox($event: any) {
    this.innerPaper = $event.paper;
    this.innerGraph = $event.graph;
    console.log(this.innerPaper);
    console.log(this.innerGraph);
  }

}
