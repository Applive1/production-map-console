import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";

@Component({
    selector: 'pm-servers',
    templateUrl: 'servers.component.html',
    styleUrls: ['servers.component.css'],
    directives: [FORM_DIRECTIVES]
})
export class ServersComponent {

    constructor() {
    }

    ngOnInit() {
    }
}
