import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionComponent } from './production.component';
import { ProductionRoutingModule } from './production-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [ProductionComponent],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    NgxEchartsModule,
  ],
})
export class ProductionModule { }
