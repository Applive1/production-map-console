import { DedicatedAgent } from './dedicated-agent';

export class Action {

    private _name: String;
    private _order: Number;
    private _server: DedicatedAgent;

    constructor() {
        this._name = null;
        this._order = -1;
        this._server = null;
    }

}