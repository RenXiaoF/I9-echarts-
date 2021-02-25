/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanClassComponent } from './plan-class.component';

describe('PlanClassComponent', () => {
  let component: PlanClassComponent;
  let fixture: ComponentFixture<PlanClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
