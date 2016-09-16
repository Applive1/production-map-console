/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LibpmService } from './libpm.service';

describe('Service: Libpm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibpmService]
    });
  });

  it('should ...', inject([LibpmService], (service: LibpmService) => {
    expect(service).toBeTruthy();
  }));
});
