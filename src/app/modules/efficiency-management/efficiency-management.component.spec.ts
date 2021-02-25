import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyManagementComponent } from './efficiency-management.component';

describe('EfficiencyManagementComponent', () => {
  let component: EfficiencyManagementComponent;
  let fixture: ComponentFixture<EfficiencyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficiencyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
