/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Practice2Component } from './practice2.component';

describe('Practice2Component', () => {
  let component: Practice2Component;
  let fixture: ComponentFixture<Practice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
