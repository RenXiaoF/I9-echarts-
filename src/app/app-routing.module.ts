import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  // 默认 i9云端制造协同平台大数据
  { path: '', redirectTo: 'big-echart', pathMatch: 'full' },
  // i9云端制造协同平台大数据  ok
  {
    path: 'big-echart',
    loadChildren: () => import('./big-echart/big-echart.module').then(m => m.BigEchartModule),
  },
  // 智能车间看板  ok
  {
    path: 'work-shop',
    loadChildren: () => import('./work-shop/work-shop.module').then(m => m.WorkShopModule),
  },
  // 各组生产线平衡率表  （还没有接口，页面已经写好）
  {
    path: 'balance-rate',
    loadChildren: () => import('./modules/balance-rate/balance-rate.module').then(m => m.BalanceRateModule),
  },
  // 各组转款率 （还没有接口，页面已经写好）
  {
    path: 'transfer-rate',
    loadChildren: () => import('./modules/transfer-rate/transfer-rate.module').then(m => m.TransferRateModule),
  },
  // 车间效率管理看板   （本周效率接口后端还没有调整:还没有接口），其余均与对接完成
  {
    path: 'efficiency-management',
    loadChildren: () => import('./modules/efficiency-management/efficiency-management.module').then(m => m.EfficiencyManagementModule),
  },
  // 快反订单进度目视看板   (还没有接口，页面已经写好）
  {
    path: 'order-schedule',
    loadChildren: () => import('./modules/order-schedule/order-schedule.module').then(m => m.OrderScheduleModule),
  },
  // 车间生产品质管控看板  ok
  {
    path: 'quality',
    loadChildren: () => import('./modules/quality/quality.module').then(m => m.QualityModule),
  },
  // 生产制造执行系统大数据看板  ok
  {
    path: 'production',
    loadChildren: () => import('./modules/production/production.module').then(m => m.ProductionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
