/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MapServersComponent } from './map-servers.component';

describe('Component: MapServers', () => {
  it('should create an instance', () => {
    let component = new MapServersComponent();
    expect(component).toBeTruthy();
  });
});
