import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import {MessagesComponent} from "./messages/messages.component";
import {MapExplorerComponent} from "./map-explorer/map-explorer.component";
import {MapSettingsComponent} from "./map-settings/map-settings.component";
import {MapEditorComponent} from "./map-editor/map-editor.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, SideBarComponent, MessagesComponent, MapExplorerComponent, MapSettingsComponent, MapEditorComponent]
})
export class AppComponent {

}
