import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceRateComponent } from './balance-rate.component';
import { BalanceRateRoutingModule } from './balance-rate-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [BalanceRateComponent],
  imports: [
    CommonModule,
    BalanceRateRoutingModule,
    NgxEchartsModule
  ]
})
export class BalanceRateModule { }
