import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class JobsService {

  private serverUrl: string = 'http://localhost:8080/';

  constructor(private http: Http, public options: RequestOptions) {
    let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
    this.options.headers = headers;
  }

  deleteJob(jobId) {
    return this.http.get(this.serverUrl + 'ScheduledJob/deleteJob/' + jobId).map(this.extractData);
  }

  addJob(job) {
    return this.http.post(this.serverUrl + 'ScheduledJob/addJob', job).map(this.extractData);
  }

  getFutureJobs() {
    return this.http.get(this.serverUrl + 'ScheduledJob/getFutureJobs').map(this.extractData);
  }

  updateJob(job) {
    return this.http.post(this.serverUrl + 'ScheduledJob/updateJob', job).map(this.extractData);
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
