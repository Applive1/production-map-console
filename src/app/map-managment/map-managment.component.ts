import { Component, OnInit, Input } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MapSettingsComponent } from '../map-settings/map-settings.component';
import { MapEditorComponent } from '../map-editor/map-editor.component';
import { MapLeftPanelComponent } from '../map-left-panel/map-left-panel.component';
import { ProjectService } from '../shared/services/project.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import * as _ from 'lodash';


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
  public projectsTree: any;

  constructor(private projectService: ProjectService, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    let user = this.authenticationService.currentUser;
    if (_.isEmpty(user)) {
      return;
    }
    console.log("get Projects");
    this.projectService.getJstreeProjectsByUser(user.id).subscribe((projects) => {
      console.log(projects);
      this.projectsTree = projects;
    });
  }

  setSideBarState(state: boolean) {
    this.sideBarState = state;
  }

  updateToolBox($event: any) {
    this.designerOps = $event;
  }

}
