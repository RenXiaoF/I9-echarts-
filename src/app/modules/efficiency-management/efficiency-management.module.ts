import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EfficiencyManagementComponent } from './efficiency-management.component';
import { EfficiencyManagementRoutingModule } from './efficiency-management-routing.module';


@NgModule({
  declarations: [EfficiencyManagementComponent],
  imports: [
    CommonModule,
    EfficiencyManagementRoutingModule
  ]
})
export class EfficiencyManagementModule { }
