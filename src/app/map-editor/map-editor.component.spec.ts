/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MapEditorComponent } from './map-editor.component';

describe('Component: MapEditor', () => {
  it('should create an instance', () => {
    let component = new MapEditorComponent();
    expect(component).toBeTruthy();
  });
});
