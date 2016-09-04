import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class ProjectService {
    private serverUrl: string = 'http://localhost:8080/';

    constructor(private http: Http, public options: RequestOptions) {
        let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
        this.options.headers = headers;
    }
    deleteProject(projectId) {
        return this.http.get(this.serverUrl + 'project/deleteProject/' + projectId, this.options).map(this.extractData);
    }
    getProjectById(projectId) {
        return this.http.get(this.serverUrl + 'project/getProjectById/' + projectId, this.options).map(this.extractData);
    }
    getProjectsByUser(userId) {
        return this.http.get(this.serverUrl + 'project/getProjectByUser/' + userId, this.options).map(this.extractData);
    }
    getJstreeProjectsByUser(userId) {
        return this.http.get(this.serverUrl + 'project/getJstreeProjectsByUser/' + userId, this.options).map(this.extractData);
    }
    createProject(projectName) {
        return this.http.post(this.serverUrl + 'project/createProject', { name: projectName }, this.options ).map(this.extractData);
    }

    updateProject(project) {
        //TODO: create rename function for projects at the server
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
