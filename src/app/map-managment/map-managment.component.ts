import { Component, OnInit, Input } from '@angular/core';
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
  public designerOps: any = null;
  public sideBarState: boolean = true;
  public currentPanel: number;
  public leftPanelTitle: string;
  public panelsTitles: any;

  constructor() {
    this.panelsTitles = [
      'PROJECTS',
      'AGENTS'
    ]
  }

  ngOnInit() {
    this.currentPanel = 1;
  }

  selectPanel(panelId: number) {
    this.currentPanel = panelId;
    this.leftPanelTitle = this.panelsTitles[this.currentPanel];
  }

  setSideBarState(state: boolean) {
    this.sideBarState = state;
  }

  updateToolBox($event: any) {
    this.innerPaper = $event.paper;
    this.innerGraph = $event.graph;
    this.designerOps = $event.designerOps;
  }

}
