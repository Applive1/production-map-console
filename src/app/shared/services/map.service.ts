import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import { ConstsService } from './consts.service';

@Injectable()
export class MapService {
  private serverUrl: string;

  constructor(private http: Http, public options: RequestOptions, private constsService: ConstsService) {
    let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
    this.options.headers = headers;
    this.serverUrl = this.constsService.getServerUrl();
  }
  connectTest() {
    let username = 'test';
    let password = 'asdfasdf';
    return this.http.post(this.serverUrl + 'auth/local', {
      identifier: username,
      password: password
    }).map(this.extractData);
  }
  deleteMap(mapId) {
    return this.http.get(this.serverUrl + 'map/deleteMap/' + mapId, this.options).map(this.extractData);
  }
  getMapById(mapId) {
    return this.http.get(this.serverUrl + 'map/getMapById/' + mapId, this.options).map(this.extractData);
  }
  saveMap(map) {
    return this.http.post(this.serverUrl + 'map/addMapVersion', map, this.options).map(this.extractData);
  }
  createMap(mapName, projectId) {
    return this.http.post(this.serverUrl + 'map/createMap', { name: mapName, Project: projectId }, this.options).map(this.extractData);
  }
  executeMap(map, agents) {
    return this.http.post(this.serverUrl + 'sysfile/execute', { 'map': map, agentsIds: agents }, this.options).map(this.extractData);
  }
  resumeMap(map) {
    return this.http.post(this.serverUrl + 'sysfile/resumeMap', map, this.options).map(this.extractData);
  }
  ChangeMapRunStatus(map, status) {
    return this.http.post(this.serverUrl + 'map/updateVersionStatus', { map: map, status: status }, this.options).map(this.extractData);
  }
  updateMapProject(MapId, ProjectId) {
    return this.http.get(this.serverUrl + 'map/updateMapProject/' + MapId + '/' + ProjectId, this.options).map(this.extractData);
  }
  updateMap(map) {
    return this.http.post(this.serverUrl + 'map/updateMapProject/', { map: map }, this.options).map(this.extractData);
  }
  duplicateMap(mapName, projectId, dmapId) {
    return this.http.post(this.serverUrl + 'map/duplicate/' + dmapId, { name: mapName, Project: projectId }, this.options).map(this.extractData);
  }

  /* offline Services */
  loadMapVersion(map, index) {
    if (!map || !index) {
      return;
    }
    let mapView = JSON.parse(JSON.stringify(map.structure));
    map.versionIndex = index;

    map.mapView = _.cloneDeep(map.versions[index].structure);
    if (!map.mapView.attributes) {
      map.mapView.attributes = [];
    }
  }

  private extractData(res: Response) {
    try {
      let body = res.json();
      return body || {};
    } catch (ex) {
      return {};
    }
  }
}
