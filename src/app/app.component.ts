import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {SideBarComponent} from "./side-bar/side-bar.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['shared/css/flexboxgrid.css', 'app.component.css'],
  directives: [HeaderComponent, SideBarComponent]
})
export class AppComponent {

}
