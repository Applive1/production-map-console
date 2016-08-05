import { Param } from './agent-param';
import { DedicatedAgent } from './dedicated-agent';

export class Method {

    private _name: string;
    private _params: Param[];
    private _actionsString: string;
    private _agent: DedicatedAgent;

    constructor() {

    }
}