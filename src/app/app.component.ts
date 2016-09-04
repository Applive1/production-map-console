import { Component, ViewContainerRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Modal, BS_MODAL_PROVIDERS } from 'angular2-modal/plugins/bootstrap';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';
import * as  _ from 'lodash';


@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [...BS_MODAL_PROVIDERS],
  providers: [AuthenticationService]
})
export class App implements OnInit{
  constructor(public modal: Modal, viewContainer: ViewContainerRef, private http: Http,
              private authenticationService: AuthenticationService, private router: Router) {
    modal.defaultViewContainer = viewContainer;
  }

  ngOnInit() {
    this.authenticationService.isLoggedIn().subscribe((result) => {
      if (!result) {
        this.router.navigate(['login']);
      }
    },
    (error) => {
      this.router.navigate(['login']);
    });
  }
}
