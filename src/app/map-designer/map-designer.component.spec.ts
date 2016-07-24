/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MapDesignerComponent } from './map-designer.component';

describe('Component: MapDesigner', () => {
  it('should create an instance', () => {
    let component = new MapDesignerComponent();
    expect(component).toBeTruthy();
  });
});
