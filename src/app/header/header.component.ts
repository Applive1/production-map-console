import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'pm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: any = {};

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.user = this.authenticationService.getCurrentUser();
  }

  logout() {
    this.authenticationService.logout();
  }

}
