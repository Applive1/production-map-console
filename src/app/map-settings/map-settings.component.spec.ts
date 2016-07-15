/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MapSettingsComponent } from './map-settings.component';

describe('Component: MapSettings', () => {
  it('should create an instance', () => {
    let component = new MapSettingsComponent();
    expect(component).toBeTruthy();
  });
});
