import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MapExplorerComponent } from '../map-explorer/map-explorer.component';
import { MapSettingsComponent } from '../map-settings/map-settings.component';
import { MapEditorComponent } from '../map-editor/map-editor.component';
import { MapToolboxComponent } from '../map-toolbox/map-toolbox.component';

@Component({
    moduleId: module.id,
    selector: 'pm-map-left-panel',
    templateUrl: 'map-left-panel.component.html',
    styleUrls: ['../shared/css/map-bar.css', 'map-left-panel.component.css'],
    directives: [
        MessagesComponent, MapExplorerComponent, MapSettingsComponent,
        MapEditorComponent, MapToolboxComponent
    ]
})
export class MapLeftPanelComponent implements OnInit, OnChanges {

    public innerPaper: any = null;
    public innerGraph: any = null;
    public designerOps: any = null;
    public sideBarState: boolean = true;
    public currentPanel: number;
    public leftPanelTitle: string;
    public panelsTitles: any;
    @Input() graphProps: any;
    @Input() projectsTree: any;
    @Output() onMapSelect: EventEmitter = new EventEmitter();




    constructor() {
        this.panelsTitles = [
            'PROJECTS',
            'AGENTS'
        ]
    }

    ngOnInit() {
        console.log('load left panel');
        this.selectPanel(0);
    }

    selectMap($event) {
        this.onMapSelect.emit($event);
    }

    selectPanel(panelId: number) {
        this.currentPanel = panelId;
        this.leftPanelTitle = this.panelsTitles[this.currentPanel];
    }

    setSideBarState(state: boolean) {
        this.sideBarState = state;
    }

    updateToolBox($event: any) {
        this.innerPaper = $event.paper;
        this.innerGraph = $event.graph;
        this.designerOps = $event.designerOps;
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
        if (changes['graphProps'] && changes['graphProps'].currentValue != null && this.graphProps != null) {
            this.updateToolBox(this.graphProps);
        }
    }

}
