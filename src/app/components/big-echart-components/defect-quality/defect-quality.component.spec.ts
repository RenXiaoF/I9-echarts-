/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefectQualityComponent } from './defect-quality.component';

describe('DefectQualityComponent', () => {
  let component: DefectQualityComponent;
  let fixture: ComponentFixture<DefectQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
