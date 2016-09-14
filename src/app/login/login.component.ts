import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentPanel: number = 0;
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {

  }

  login(username, password) {
    this.authenticationService.login(username, password).subscribe((res) => {
      console.log('login clicked returned');
      this.router.navigate(['']);
    });
  }

}
