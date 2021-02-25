import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EfficiencyManagementComponent } from './efficiency-management.component';
const routes: Routes = [
  {
    path: '',
    component: EfficiencyManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EfficiencyManagementRoutingModule { }
