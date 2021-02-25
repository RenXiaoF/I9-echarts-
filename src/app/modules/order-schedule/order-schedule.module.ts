import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderScheduleComponent } from './order-schedule.component';
import { OrderScheduleRoutingModule } from './order-schedule-routing.module';



@NgModule({
  declarations: [OrderScheduleComponent],
  imports: [
    CommonModule,
    OrderScheduleRoutingModule
  ]
})
export class OrderScheduleModule { }
