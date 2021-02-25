import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkShopComponent } from './work-shop.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';

const routes: Routes = [
  {
    path: '',
    component: WorkShopComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    RouterModule.forChild(routes)

  ],
  declarations: [WorkShopComponent]
})
export class WorkShopModule { }
