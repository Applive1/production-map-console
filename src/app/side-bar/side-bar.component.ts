import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pm-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  currentPanel: number;

  constructor() {}

  ngOnInit() {
    this.currentPanel = 0;
  }

  changePanel(panelId) {
    this.currentPanel = panelId;
  }

}
