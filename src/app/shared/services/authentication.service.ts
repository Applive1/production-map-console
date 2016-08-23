import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {

    public currentUser: any = { id: '5732cd1d60a8d7b815c3416b'};

    private serverUrl: string = 'http://localhost:8080/';

    constructor(private http: Http, public options: RequestOptions, private localStorageService: LocalStorageService) {
        let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
        this.options = new RequestOptions({ headers: headers });
    }


    isLoggedIn() {
        return this.http.get(this.serverUrl + 'isLoggedIn').map(this.extractData).map((result) => {
            this.currentUser = { id: '5732cd1d60a8d7b815c3416b' };
            console.log(this.currentUser);
            if (_.isEmpty(this.currentUser)) {
                return false;
            }
            return true;
        });
    }

    login(username, password) {
        return this.http.post(this.serverUrl + 'auth/local', {
            identifier: username,
            password: password
        }).map(this.extractData).map((result) => {
            this.currentUser = result;
            //localStorage.setItem('pm-user', JSON.stringify(this.currentUser));
            return this.currentUser;
        });
    }

    logout() {
        this.currentUser = {};
        // localStorage.setItem('pm-user', JSON.stringify(this.currentUser));
    }

    register(user) {
        return this.http.post(this.serverUrl + 'auth/local/register', user).map(this.extractData).map((result) => {
            this.currentUser = result;
            // localStorage.setItem('pm-user', JSON.stringify(this.currentUser));
            return this.currentUser;
        });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
