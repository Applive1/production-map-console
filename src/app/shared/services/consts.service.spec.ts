/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConstsService } from './consts.service';

describe('Service: Consts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstsService]
    });
  });

  it('should ...', inject([ConstsService], (service: ConstsService) => {
    expect(service).toBeTruthy();
  }));
});
