import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRateComponent } from './transfer-rate.component';

describe('TransferRateComponent', () => {
  let component: TransferRateComponent;
  let fixture: ComponentFixture<TransferRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
