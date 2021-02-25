import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QualityComponent } from './quality.component';

const routes: Routes = [
  {
    path: '', component: QualityComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class QualityRoutingModule { }
