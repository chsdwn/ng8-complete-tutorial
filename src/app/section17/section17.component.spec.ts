/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Section17Component } from './section17.component';

describe('Section17Component', () => {
  let component: Section17Component;
  let fixture: ComponentFixture<Section17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
