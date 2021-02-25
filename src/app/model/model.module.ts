import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { Routes, RouterModule } from '@angular/router';
import { PlmDesignCenterComponent } from '../components/big-echart-components/plm-design-center/plm-design-center.component';
import { MonthDoneComponent } from '../components/big-echart-components/month-done/month-done.component';
import { PieConComponent } from '../components/big-echart-components/pie-con/pie-con.component';
import { TotalFiveComponent } from '../components/big-echart-components/total-five/total-five.component';
import { ScheduleComponent } from '../components/big-echart-components/schedule/schedule.component';
import { FourRingComponent } from '../components/big-echart-components/four-ring/four-ring.component';
import { PmcClassComponent } from '../components/big-echart-components/pmc-class/pmc-class.component';
import { PlanClassComponent } from '../components/big-echart-components/plan-class/plan-class.component';
import { DashBroadComponent } from '../components/big-echart-components/dash-broad/dash-broad.component';
import { MesClassComponent } from '../components/big-echart-components/mes-class/mes-class.component';
import { MesBarComponent } from '../components/big-echart-components/mes-bar/mes-bar.component';
import { MesTableComponent } from '../components/big-echart-components/mes-table/mes-table.component';
import { GlobalstatusComponent } from '../components/big-echart-components/globalstatus/globalstatus.component';
import { PieQualityComponent } from '../components/big-echart-components/pie-quality/pie-quality.component';
import { DefectQualityComponent } from '../components/big-echart-components/defect-quality/defect-quality.component';

const routes: Routes = [
  // big-echart.component
  { path: 'plm-design-center', component: PlmDesignCenterComponent },
  { path: 'month-done', component: MonthDoneComponent },
  { path: 'pie-con', component: PieConComponent },
  { path: 'total-five', component: TotalFiveComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'ring', component: FourRingComponent },
  { path: 'pmc-class', component: PmcClassComponent },
  { path: 'plan-class', component: PlanClassComponent },
  { path: 'dash-broad', component: DashBroadComponent },
  { path: 'mes-class', component: MesClassComponent },
  { path: 'mes-bar', component: MesBarComponent },
  { path: 'mes-table', component: MesTableComponent },
  { path: 'map', component: GlobalstatusComponent },
  // quality
  { path: 'pir-quality', component: PieQualityComponent },
  { path: 'defact-quality', component: DefectQualityComponent },

];

const COMPONENTS = [
  // big-echart.component 里面的内容
  PlmDesignCenterComponent,
  MonthDoneComponent,
  PieConComponent,
  TotalFiveComponent,
  ScheduleComponent,
  FourRingComponent,
  PmcClassComponent,
  PlanClassComponent,
  DashBroadComponent,
  MesClassComponent,
  MesBarComponent,
  MesTableComponent,
  GlobalstatusComponent,
  // quality 组件里面的内容
  PieQualityComponent,
  DefectQualityComponent,
];
@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [...COMPONENTS],
  exports: [
    RouterModule,
    ...COMPONENTS,
  ]
})
export class ModelModule { }
