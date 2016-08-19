import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {

    public currentUser: any = {};

    private serverUrl: string = 'http://localhost:8080/';

    constructor(private http: Http, public options: RequestOptions, private localStorageService: LocalStorageService) {
        let headers = new Headers({ 'Content-Type': 'application/json', withCredentials: true });
        this.options = new RequestOptions({ headers: headers });
    }


    isLoggedIn() {
        return this.http.get(this.serverUrl + 'isLoggedIn').map(this.extractData).map((result) => {
            this.currentUser = this.localStorageService.get('user');
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
            this.localStorageService.set('user', this.currentUser);
            return this.currentUser;
        });
    }

    logout() {
        this.currentUser = {};
        this.localStorageService.set('user', this.currentUser);
        // var cookies = $cookies.getAll();
        // angular.forEach(cookies, function (v, k) {
        //     $cookies.remove(k);
        // });
        // $location.path('/login');
    }

    register(user) {
        return this.http.post(this.serverUrl + 'auth/local/register', user).map(this.extractData).map((result) => {
            this.currentUser = result;
            this.localStorageService.set('user', this.currentUser);
            return this.currentUser;
        });
    }

    private extractData(res: Response) {
        console.log(res);
        let body = res.json();
        return body || {};
    }
}
