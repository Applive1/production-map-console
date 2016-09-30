/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServersService } from './servers.service';

describe('Service: Servers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServersService]
    });
  });

  it('should ...', inject([ServersService], (service: ServersService) => {
    expect(service).toBeTruthy();
  }));
});
