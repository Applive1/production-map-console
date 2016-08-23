import { Component, ViewContainerRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
    selector: 'pm-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent {
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
