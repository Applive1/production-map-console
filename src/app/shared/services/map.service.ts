import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class MapService {
  private serverUrl: string = 'http://localhost:8080/';

  constructor(private http: Http, public options: RequestOptions) {
    let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
    { withCredentials: true} = new RequestOptions({ headers: headers });
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
    return this.http.get(this.serverUrl + 'map/deleteMap/' + mapId, { withCredentials: true }).map(this.extractData);
  }
  getMapById(mapId) {
    return this.http.get(this.serverUrl + 'map/getMapById/' + mapId, { withCredentials: true}).map(this.extractData);
  }
  saveMap(map) {
    return this.http.post(this.serverUrl + 'map/addMapVersion', map, { withCredentials: true}).map(this.extractData);
  }
  createMap(mapName, projectId) {
    return this.http.post(this.serverUrl + 'map/createMap', { name: mapName, Project: projectId }, { withCredentials: true}).map(this.extractData);
  }
  executeMap(map, agents) {
    return this.http.post(this.serverUrl + 'sysfile/execute', { 'map': map, agentsIds: agents }, { withCredentials: true}).map(this.extractData);
  }
  resumeMap(map) {
    return this.http.post(this.serverUrl + 'sysfile/resumeMap', map, { withCredentials: true}).map(this.extractData);
  }
  ChangeMapRunStatus(map, status) {
    return this.http.post(this.serverUrl + 'map/updateVersionStatus', { map: map, status: status }, { withCredentials: true}).map(this.extractData);
  }
  updateMapProject(MapId, ProjectId) {
    return this.http.get(this.serverUrl + 'map/updateMapProject/' + MapId + '/' + ProjectId, { withCredentials: true}).map(this.extractData);
  }
  updateMap(map) {
    return this.http.post(this.serverUrl + 'map/updateMapProject/', { map: map }, { withCredentials: true}).map(this.extractData);
  }
  duplicateMap(mapName, projectId, dmapId) {
    return this.http.post(this.serverUrl + 'map/duplicate/' + dmapId, { name: mapName, Project: projectId }, { withCredentials: true}).map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
