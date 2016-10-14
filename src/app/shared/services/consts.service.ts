import { Injectable } from '@angular/core';

@Injectable()
export class ConstsService {

  private serverUrl = 'http://localhost:8080/';

  constructor() { }

  getServerUrl() {
    return this.serverUrl;
  }

}
