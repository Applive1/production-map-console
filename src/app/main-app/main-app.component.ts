import { Component, ViewContainerRef, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MapManagmentComponent } from '../map-managment/map-managment.component';
import { AdminPanelComponent } from "../admin-panel/admin-panel.component";

@Component({
    selector: 'pm-main-app',
    templateUrl: 'main-app.component.html',
    styleUrls: ['main-app.component.css'],
    directives: [HeaderComponent, SideBarComponent, MapManagmentComponent, AdminPanelComponent]
})
export class MainAppComponent {
    public currentPanel: number = 0;
    constructor() {
    }

    ngOnInit() {
    }

    updatePanel($event) {
        this.currentPanel = $event.panelId;
    }
}
