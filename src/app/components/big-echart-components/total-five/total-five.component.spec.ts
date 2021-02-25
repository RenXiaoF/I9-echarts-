/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TotalFiveComponent } from './total-five.component';

describe('TotalFiveComponent', () => {
  let component: TotalFiveComponent;
  let fixture: ComponentFixture<TotalFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
