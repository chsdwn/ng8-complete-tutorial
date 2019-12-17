/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Practice2v3Component } from './practice2v3.component';

describe('Practice2v3Component', () => {
  let component: Practice2v3Component;
  let fixture: ComponentFixture<Practice2v3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice2v3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice2v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
