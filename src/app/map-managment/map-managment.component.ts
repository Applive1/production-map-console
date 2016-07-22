import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MapExplorerComponent } from '../map-explorer/map-explorer.component';
import { MapSettingsComponent } from '../map-settings/map-settings.component';
import { MapEditorComponent } from '../map-editor/map-editor.component';

@Component({
  moduleId: module.id,
  selector: 'pm-map-managment',
  templateUrl: 'map-managment.component.html',
  styleUrls: ['map-managment.component.css'],
  directives: [MessagesComponent, MapExplorerComponent, MapSettingsComponent, MapEditorComponent] 
})
export class MapManagmentComponent implements OnInit {

  constructor() {}

  ngOnInit() {
      console.log('Loaded Map Managment component');
  }

}
