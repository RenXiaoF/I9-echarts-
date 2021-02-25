import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferRateComponent } from './transfer-rate.component';
import { TransferRateRoutingModule } from './transfer-rate-routing.module';


@NgModule({
  declarations: [TransferRateComponent],
  imports: [
    CommonModule,
    TransferRateRoutingModule
  ]
})
export class TransferRateModule { }
