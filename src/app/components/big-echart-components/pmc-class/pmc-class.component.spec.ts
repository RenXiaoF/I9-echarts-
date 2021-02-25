/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmcClassComponent } from './pmc-class.component';

describe('PmcClassComponent', () => {
  let component: PmcClassComponent;
  let fixture: ComponentFixture<PmcClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmcClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmcClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
