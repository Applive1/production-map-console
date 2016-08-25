import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class LibPMService {
    private serverUrl: string = 'http://localhost:8080/';

    constructor(private http: Http, public options: RequestOptions) {
        let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
        this.options.headers = headers;
    }

    getLibPM() {
        return this.http.get(this.serverUrl + 'libs/lib_production_map.js', this.options).map(this.extractData);
    }

    private extractData(res: Response) {
        return res.text() || '';
    }
}
