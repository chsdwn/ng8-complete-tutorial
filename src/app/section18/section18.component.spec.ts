/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Section18Component } from './section18.component';

describe('Section18Component', () => {
  let component: Section18Component;
  let fixture: ComponentFixture<Section18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
