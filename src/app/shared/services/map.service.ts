import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import * as jsonpatch from 'jsonpatch';

@Injectable()
export class MapService {
  private serverUrl: string = 'http://localhost:8080/';

  constructor(private http: Http, public options: RequestOptions) {
    let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
    this.options.headers = headers;
  }
  connectTest() {
    let username = 'test';
    let password = 'asdfasdf';
    return this.http.post('http://localhost:8080/auth/local', {
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
    if(!map || !index) {
      return;
    }
    let mapView = _.cloneDeep(map.structure);
    map.versionIndex = index;

    let versions = _.cloneDeep(map.versions);
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
    map.mapView = mapView;
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
