import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-root',
  templateUrl: './maps-root.component.html',
  styleUrls: ['./maps-root.component.css']
})
export class MapsRootComponent implements OnInit {

    public currentPanel: number = 0;
    constructor() {
    }

    ngOnInit() {
    }

    updatePanel($event) {
      this.currentPanel = $event.panelId;
    }

}
