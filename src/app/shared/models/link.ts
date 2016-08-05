import { Process } from './process';

export class Link {
    private _processes: Process[];
    private _name: String;
    constructor() {
        this._processes = [];
    }
}