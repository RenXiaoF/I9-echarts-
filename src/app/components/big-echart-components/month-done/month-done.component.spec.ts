/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonthDoneComponent } from './month-done.component';

describe('MonthDoneComponent', () => {
  let component: MonthDoneComponent;
  let fixture: ComponentFixture<MonthDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
