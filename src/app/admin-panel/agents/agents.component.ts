import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";

@Component({
    selector: 'pm-agents',
    templateUrl: 'agents.component.html',
    styleUrls: ['agents.component.css'],
    directives: [FORM_DIRECTIVES]
})
export class AgentsComponent {

    constructor() {
    }

    ngOnInit() {
    }
}
