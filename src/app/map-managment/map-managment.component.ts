import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { MapService } from '../shared/services/map.service';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-map-managment',
  templateUrl: './map-managment.component.html',
  styleUrls: ['./map-managment.component.css'],
  providers: [ProjectService, MapService]
})
export class MapManagmentComponent implements OnInit {


  public designerOps: any = null;
  public sideBarState: boolean = true;
  public projectsTree: any = [];
  public currentMap: any = {};
  public messages: any = [];
  public mapLoaded: boolean = false;

  constructor(private projectService: ProjectService, private authenticationService: AuthenticationService, private mapService: MapService) {

  }

  ngOnInit() {
    let user = this.authenticationService.getCurrentUser();
    if (!user || !user.id) {
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
