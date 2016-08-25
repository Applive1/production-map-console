import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class LibPMService {
    private serverUrl: string = 'http://localhost:8080/';
    private libs: Object = {};
    private mapLibPath: string = 'productionMap/map.d.ts';

    constructor(private http: Http, public options: RequestOptions) {
        let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
        this.options.headers = headers;
        this.libs = {};
    }

    getLibPM() {
        return this.http.get(this.serverUrl + 'libs/lib_production_map.js', this.options).map(this.extractData);
    }

    addMap(monaco, map) {
        if (this.libs[this.mapLibPath]) {
            this.libs[this.mapLibPath].dispose();
        }
        let mapDefinition = "let map = ";
        let mapContent: string = [mapDefinition, JSON.stringify({
            attributes: map.attributes,
            nodes: map.nodes,
            links: map.links
        }), ';'].join('');

        this.libs[this.mapLibPath] = monaco.languages.typescript.javascriptDefaults.addExtraLib(mapContent, this.mapLibPath);
    }

    private extractData(res: Response) {
        return res.text() || '';
    }
}
