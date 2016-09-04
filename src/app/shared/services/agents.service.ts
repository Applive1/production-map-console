import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class AgentsService {
    private blocks: any = [];
    private drag_blocks: any = [];
    private blocks_names: any = {};
    private dedicated_types: any = [];

    private serverUrl: string = 'http://localhost:8080/';

    constructor(private http: Http, public options: RequestOptions) {
        let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
        this.options = new RequestOptions({ headers: headers });
    }

    uploadFile(uploadUrl, file) {
        let fd = new FormData();
        /* Take the first selected file */
        fd.append('file', file);

        return this.http.post(this.serverUrl + '/registerAgent', fd, this.options).map(this.extractData);
    }

    all(cb) {
        if (cb === true) {
            return this.dedicated_types;
        } else if (cb === "blocks") {
            return this.blocks;
        }
        this.blocks.splice(0, this.blocks.length);
        this.drag_blocks.splice(0, this.drag_blocks.length);
        this.dedicated_types.splice(0, this.dedicated_types.length);
        return this.http.get(this.serverUrl + 'getallagents').map(this.extractData).map(
            (msg) => {
                _.forEach(msg, (value) => {
                    this.blocks.push(value);
                });
                _.forEach(this.blocks, (block) => {
                    this.drag_blocks.push({
                        img_url: block.imgUrl,
                        text: block.type
                    });
                    this.dedicated_types.push({
                        type: block.type,
                        url: ''
                    });
                });
                return {
                    servers: this.blocks,
                    blocks: this.drag_blocks
                };
            }
        );
    }


        remove(agent) {
            _.forEach(this.blocks, (key, block) => {
                if (block === agent.type) {
                    this.blocks.splice(key, 1);
                }
            });

            _.forEach(this.dedicated_types, (key, block) => {
                if (block.type === agent.type) {
                    this.dedicated_types.splice(key, 1);
                }
            });

            _.forEach(this.drag_blocks, (key, block) => {
                if (block.type === agent.type) {
                    this.drag_blocks.splice(key, 1);
                }
            });

            /* remove from server */
            return this.http.delete(this.serverUrl + 'dedicatedAgent/' + agent.id);
        }
    get(type) {
        console.log(this.blocks);
        for (let block of this.blocks) {
            if (block.type === type) {
                return block;
            }
        }
        return {};
    }
    getMethod(id) {
        return this.http.get(this.serverUrl + 'method/' + id);
    }
    getMethods(type) {
        let server = {
            methods: [],
            id: 0
        };
        for (let block in this.blocks) {
            if (this.blocks[block].type === type) {
                server = this.blocks[block];
            }
        }
        return this.http.get(this.serverUrl + 'dedicatedAgent/' + server.id).map(this.extractData);
    }

    add(type, methods, imgUrl, file, agents) {
        let server = {
            type: type,
            methods: methods,
            imgUrl: imgUrl
        };
        return this.http.post(this.serverUrl + 'dedicatedAgent', server).map((resData) => {
            this.blocks.push(server);
            agents.forEach(agent => {
                this.uploadFile(agent.url, file);
            });
            return resData;
        });
    }

    newBlock(type) {
        if (this.blocks_names.hasOwnProperty(type)) {
            let res = this.blocks_names[type];
            this.blocks_names[type] = res + 1;
            return type + '' + res;
        } else {
            this.blocks_names[type] = 1;
            return type;
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
