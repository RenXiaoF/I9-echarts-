/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashBroadComponent } from './dash-broad.component';

describe('DashBroadComponent', () => {
  let component: DashBroadComponent;
  let fixture: ComponentFixture<DashBroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
