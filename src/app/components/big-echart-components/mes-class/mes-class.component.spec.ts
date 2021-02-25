/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MesClassComponent } from './mes-class.component';

describe('MesClassComponent', () => {
  let component: MesClassComponent;
  let fixture: ComponentFixture<MesClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
