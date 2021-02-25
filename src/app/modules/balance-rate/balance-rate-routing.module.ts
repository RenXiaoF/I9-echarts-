import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceRateComponent } from './balance-rate.component';
const routes: Routes = [
  {
    path: '',
    component: BalanceRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRateRoutingModule { }
