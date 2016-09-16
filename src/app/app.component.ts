import { Component, ViewContainerRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import * as  _ from 'lodash';

import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal, private http: Http,
    private authenticationService: AuthenticationService, private router: Router) {
    overlay.defaultViewContainer = vcRef;
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

