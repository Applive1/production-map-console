import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";

@Component({
    selector: 'pm-trigger',
    templateUrl: 'trigger.component.html',
    styleUrls: ['trigger.component.css'],
    directives: [FORM_DIRECTIVES]
})
export class TriggerComponent {

    constructor() {
    }

    ngOnInit() {
    }
}
