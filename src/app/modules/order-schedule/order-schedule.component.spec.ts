import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderScheduleComponent } from './order-schedule.component';

describe('OrderScheduleComponent', () => {
  let component: OrderScheduleComponent;
  let fixture: ComponentFixture<OrderScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
