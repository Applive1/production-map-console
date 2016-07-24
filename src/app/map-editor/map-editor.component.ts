import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapDesignerComponent } from '../map-designer/map-designer.component';
import { MapMarkupComponent } from '../map-markup/map-markup.component';
import { MapCodeEditorComponent } from '../map-code-editor/map-code-editor.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'pm-map-editor',
  templateUrl: 'map-editor.component.html',
  styleUrls: ['map-editor.component.css'],
  directives: [MapDesignerComponent, MapMarkupComponent, MapCodeEditorComponent, NgSwitch, NgSwitchCase]
})
export class MapEditorComponent implements OnInit {

  @Output() informOuterLayer = new EventEmitter(); 
  public currentPanel: number = 0;

  constructor() {}

  ngOnInit() {
  }

  selectPanel(panelId: number){
    this.currentPanel = panelId;
  }

  updateManagmentPanel($event: any) {
    this.informOuterLayer.emit($event);
  }
}
