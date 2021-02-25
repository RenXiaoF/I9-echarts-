/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MesBarComponent } from './mes-bar.component';

describe('MesBarComponent', () => {
  let component: MesBarComponent;
  let fixture: ComponentFixture<MesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
