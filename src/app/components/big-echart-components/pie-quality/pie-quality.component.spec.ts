/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieQualityComponent } from './pie-quality.component';

describe('PieQualityComponent', () => {
  let component: PieQualityComponent;
  let fixture: ComponentFixture<PieQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
