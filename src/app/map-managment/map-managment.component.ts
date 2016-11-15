import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { MapService } from '../shared/services/map.service';
import { AuthenticationService } from '../shared/services/authentication.service';

import { ResizeEvent } from 'angular2-resizable';

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
  public mapLoaded: boolean = false
  public openMaps: any[] = [];
  private maxOpenMaps: number = 4;

  constructor(private projectService: ProjectService, private authenticationService: AuthenticationService, private mapService: MapService) {
  }

  ngOnInit() {
    this.openMaps = [];
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
    this.currentMap.active = false;
    let mapIndex = _.findIndex(this.openMaps, (map) => { return map.name === $event.name; });
    if (mapIndex < 0) {
      this.mapLoaded = true;
      this.currentMap = $event;
      this.currentMap.versionIndex = this.currentMap.versions.length - 1;
      this.mapService.loadMapVersion(this.currentMap, this.currentMap.versionIndex);

      if (this.openMaps.length < this.maxOpenMaps) {
        this.openMaps.push(this.currentMap);
      } else {
        this.openMaps[this.maxOpenMaps - 1] = this.currentMap;
      }
    } else {
      this.currentMap = this.openMaps[mapIndex];
    }
    this.currentMap.active = true;
  }

  changeMap($event) {
    this.currentMap.active = false;
    this.currentMap = $event;
    this.currentMap.active = true;
  }

  closeMap(ind) {
    let mapIndex = _.findIndex(this.openMaps, (map) => { return map.name === this.currentMap.name; });
    this.openMaps.splice(ind, 1);
    if (this.openMaps.length > 0) {
      if (mapIndex === ind) {
        this.currentMap = this.openMaps[0];
        this.currentMap.active = true;
      }
    } else {
      this.currentMap = {};
      this.mapLoaded = false;
    }
  }

  /* resizeable functions */
  validate(event: ResizeEvent): boolean {
    // const MIN_DIMENSIONS_PX: number = 50;
    // if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX) {
    //   return false;
    // }
    return true;
  }

}
