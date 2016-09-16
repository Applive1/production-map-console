/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgentsService } from './agents.service';

describe('Service: Agents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentsService]
    });
  });

  it('should ...', inject([AgentsService], (service: AgentsService) => {
    expect(service).toBeTruthy();
  }));
});
