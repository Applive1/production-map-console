import { Component, OnInit, Input } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MapSettingsComponent } from '../map-settings/map-settings.component';
import { MapEditorComponent } from '../map-editor/map-editor.component';
import { MapLeftPanelComponent } from '../map-left-panel/map-left-panel.component';
import { ProjectService } from '../shared/services/project.service';
import { AuthenticationService } from '../shared/services/authentication.service';
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
  providers: [ProjectService]
})
export class MapManagmentComponent implements OnInit {

  public designerOps: any = null;
  public sideBarState: boolean = true;
  public projectsTree: any = [];
  public currentMap: any = {};
  public messages:any [];

  constructor(private projectService: ProjectService, private authenticationService: AuthenticationService) {

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

  loadMapVersion(index) {
    let mapView = _.cloneDeep(this.currentMap.structure);
    this.currentMap.versionIndex = index;

    let versions = _.cloneDeep(this.currentMap.versions);
    for (let i = 0; i <= index; i++) {
      if (versions[i].patches) {
        try {
          mapView = jsonpatch.apply_patch(mapView, versions[i].patches);
        } catch (ex) {
          console.log(ex);
          console.log(i);
          console.log(versions[i]);
          console.log(mapView);
        }
      }
    }
    this.currentMap.mapView = mapView;
  }

  selectMap($event) {
    this.currentMap = $event;
    this.currentMap.versionIndex = this.currentMap.versions.length - 1;
    this.loadMapVersion(this.currentMap.versionIndex);
  }

}
