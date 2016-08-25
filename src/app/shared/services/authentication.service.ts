import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {


    private currentUser: any;
    private userKeyName: string = 'pm-user';
    private serverUrl: string = 'http://localhost:8080/';

    constructor(private http: Http, public options: RequestOptions, private localStorageService: LocalStorageService) {
        let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
        this.options = new RequestOptions({ headers: headers });
    }


    isLoggedIn() {
        return this.http.get(this.serverUrl + 'isLoggedIn').map((result) => {
            this.currentUser = this.localStorageService.get(this.userKeyName);
            this.currentUser = JSON.parse(this.currentUser);
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
            this.localStorageService.set(this.userKeyName, JSON.stringify(this.currentUser));
            return this.currentUser;
        });
    }

    logout() {
        this.currentUser = {};
        this.localStorageService.set(this.userKeyName, JSON.stringify(this.currentUser));
    }

    register(user) {
        return this.http.post(this.serverUrl + 'auth/local/register', user).map(this.extractData).map((result) => {
            this.currentUser = result;
            this.localStorageService.set(this.userKeyName, JSON.stringify(this.currentUser));
            return this.currentUser;
        });
    }

    getCurrentUser() {
        if (!this.currentUser) {
            this.currentUser = this.localStorageService.get(this.userKeyName);
            this.currentUser = JSON.parse(this.currentUser);
        }
        return this.currentUser;
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
