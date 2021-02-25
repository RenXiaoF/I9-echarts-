import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferRateComponent } from './transfer-rate.component';
const routes: Routes = [
  {
    path: '',
    component: TransferRateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRateRoutingModule { }
