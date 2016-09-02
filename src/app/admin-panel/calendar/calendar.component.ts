import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/common";

@Component({
    selector: 'pm-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css'],
    directives: [FORM_DIRECTIVES]
})
export class CalendarComponent {
    job;

    constructor() {
      this.job = {
        type: "repeated"
      };
    }

    ngOnInit() {
    }
}
