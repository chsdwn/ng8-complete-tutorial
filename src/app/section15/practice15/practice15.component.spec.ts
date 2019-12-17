/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Practice15Component } from './practice15.component';

describe('Practice15Component', () => {
  let component: Practice15Component;
  let fixture: ComponentFixture<Practice15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
