/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';

describe('Component: SideBar', () => {
  it('should create an instance', () => {
    let component = new SideBarComponent();
    expect(component).toBeTruthy();
  });
});
