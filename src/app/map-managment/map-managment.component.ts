import { Component, OnInit, Input } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MapSettingsComponent } from '../map-settings/map-settings.component';
import { MapEditorComponent } from '../map-editor/map-editor.component';
import { MapLeftPanelComponent } from '../map-left-panel/map-left-panel.component';
import { ProjectService } from '../shared/services/project.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { MapService } from '../shared/services/map.service';

import * as _ from 'lodash';
import * as jsonpatch from 'jsonpatch';


@Component({
  moduleId: module.id,
  selector: 'pm-map-managment',
  templateUrl: 'map-managment.component.html',
  styleUrls: ['map-managment.component.css'],
  directives: [
                MessagesComponent, MapSettingsComponent,
                MapEditorComponent, MapLeftPanelComponent
  ],
  providers: [ProjectService, MapService] /* user Map service onlly here as a provider because we want to save the map state for all users */
})
export class MapManagmentComponent implements OnInit {

  public designerOps: any = null;
  public sideBarState: boolean = true;
  public projectsTree: any = [];
  public currentMap: any = {};
  public messages:any = [];
  public mapLoaded: boolean = false;

  constructor(private projectService: ProjectService, private authenticationService: AuthenticationService, private mapService: MapService) {

  }

  ngOnInit() {
    let user = this.authenticationService.getCurrentUser();
    if(!user || !user.id) {
      return;
    }
    this.projectService.getJstreeProjectsByUser(user.id).subscribe((projects) => {
      this.projectsTree = projects;
    },
    (error) => {
      console.log(error);
    });
    this.mapLoaded = false;
  }

  setSideBarState(state: boolean) {
    this.sideBarState = state;
  }

  updateToolBox($event: any) {
    this.designerOps = $event;
  }

  mapExecuted($event) {
    this.messages.push({
      content: $event
    });
  }

  selectMap($event) {
    this.mapLoaded = true;
    this.currentMap = $event;
    this.currentMap.versionIndex = this.currentMap.versions.length - 1;
    this.mapService.loadMapVersion(this.currentMap, this.currentMap.versionIndex);
  }

}
