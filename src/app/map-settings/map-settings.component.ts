import { Component, OnInit, Input } from '@angular/core';
import {MapAttributesComponent} from "../map-attributes/map-attributes.component";
import {MapServersComponent} from "../map-servers/map-servers.component";
import { NgSwitch, NgSwitchCase } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'pm-map-settings',
  templateUrl: 'map-settings.component.html',
  styleUrls: ['../shared/css/map-bar.css', 'map-settings.component.css'],
  directives: [MapAttributesComponent, MapServersComponent, NgSwitch, NgSwitchCase]
})
export class MapSettingsComponent implements OnInit {

  public currentPanel: number = 1;
  @Input() map: any = {};

  constructor() {}

  ngOnInit() {
  }

  selectPanel(panelId: number) {
    this.currentPanel = panelId;
  }
}
