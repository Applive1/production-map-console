import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import * as _ from 'lodash';


@Injectable()
export class ServersService {

  private serverUrl: string = 'http://localhost:8080/';

  constructor(private http: Http, public options: RequestOptions) {
    let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
    this.options = new RequestOptions({ headers: headers });
  }

  deleteAgent(agentId) {
    return this.http.get(this.serverUrl + 'BaseAgent/deleteAgent/' + agentId).map(this.extractData);
  }

  getAgents() {
    return this.http.get(this.serverUrl + 'BaseAgent/getAgents').map(this.extractData);
  }

  addAgent(agent) {
    return this.http.post(this.serverUrl + 'BaseAgent/addAgent', agent).map(this.extractData);
  }

  updateAgent(agent) {
    return this.http.post(this.serverUrl + 'BaseAgent/updateAgent', agent).map(this.extractData);
  }

  getStatus() {
    return this.http.get(this.serverUrl + 'BaseAgent/statuses').map(this.extractData);
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
