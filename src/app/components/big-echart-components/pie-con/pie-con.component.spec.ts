/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieConComponent } from './pie-con.component';

describe('PieConComponent', () => {
  let component: PieConComponent;
  let fixture: ComponentFixture<PieConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
