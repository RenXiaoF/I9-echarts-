import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { BigEchartComponent } from './big-echart.component';
import { ModelModule } from '../model/model.module';

const routes: Routes = [
  {
    path: '',
    component: BigEchartComponent
  }
];

@NgModule({
  declarations: [BigEchartComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    ModelModule,
    RouterModule.forChild(routes)
  ],
})

export class BigEchartModule { }
