import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderScheduleComponent } from './order-schedule.component';

const routes: Routes = [
  {path: '', component: OrderScheduleComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class OrderScheduleRoutingModule { }
