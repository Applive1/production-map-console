import { Component, ViewContainerRef, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Modal, BS_MODAL_PROVIDERS } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./shared/css/style.css', 'app.component.css'],
  viewProviders: [...BS_MODAL_PROVIDERS],
  directives: [HeaderComponent, SideBarComponent]
})
export class App {
  constructor(public modal: Modal, viewContainer: ViewContainerRef) {
    modal.defaultViewContainer = viewContainer;
  }

  ngOnInit() {
  }
}
