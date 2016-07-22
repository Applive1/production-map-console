import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeaderComponent, SideBarComponent]
})
export class App {

}
