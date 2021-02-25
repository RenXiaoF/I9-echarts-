import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityComponent } from './quality.component';
import { QualityRoutingModule } from './quality-routing.module';
import { ModelModule } from 'src/app/model/model.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [QualityComponent],
  imports: [
    CommonModule,
    QualityRoutingModule,
    NgxEchartsModule,
    ModelModule
  ],
})
export class QualityModule { }
