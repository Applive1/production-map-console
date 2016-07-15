/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MapCodeEditorComponent } from './map-code-editor.component';

describe('Component: MapCodeEditor', () => {
  it('should create an instance', () => {
    let component = new MapCodeEditorComponent();
    expect(component).toBeTruthy();
  });
});
