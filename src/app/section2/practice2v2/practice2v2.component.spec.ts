/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Practice2v2Component } from './practice2v2.component';

describe('Practice2v2Component', () => {
  let component: Practice2v2Component;
  let fixture: ComponentFixture<Practice2v2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice2v2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice2v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
