import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceRateComponent } from './balance-rate.component';

describe('BalanceRateComponent', () => {
  let component: BalanceRateComponent;
  let fixture: ComponentFixture<BalanceRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
