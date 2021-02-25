/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FourRingComponent } from './four-ring.component';

describe('FourRingComponent', () => {
  let component: FourRingComponent;
  let fixture: ComponentFixture<FourRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
