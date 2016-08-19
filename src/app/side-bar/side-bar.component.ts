import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pm-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() updatePanel = new EventEmitter();
  currentPanel: number;

  constructor() {}

  ngOnInit() {
    this.currentPanel = 0;
  }

  changePanel(panelId) {
    this.currentPanel = panelId;
    this.updatePanel.emit({
      'panelId': panelId
    });
  }

}
