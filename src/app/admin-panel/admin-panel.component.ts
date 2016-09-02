import { Component } from '@angular/core';
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
    selector: 'pm-admin-panel',
    templateUrl: 'admin-panel.component.html',
    styleUrls: ['admin-panel.component.css'],
    directives: [CalendarComponent]
})

export class AdminPanelComponent {
    constructor() {
    }

    ngOnInit() {
    }
}
