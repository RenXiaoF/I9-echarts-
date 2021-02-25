import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';
@Component({
  selector: 'app-efficiency-management',
  templateUrl: './efficiency-management.component.html',
  styleUrls: ['./efficiency-management.component.scss']
})
export class EfficiencyManagementComponent implements OnInit {

  taxno: string = ''; //
  details = new OrderDetails(); // 订单详情
  dailyOutputList: any = []; // 日产量
  weekOutputList: any = []; // 周产量
  progress = new EfficiencyProgress(); // 效率进度
  stars = new EfficiencyStar(); // 效率明星
  nowTime: number = new Date().getTime();  // 当前时间

  constructor(
    public http: ApiService,
  ) { }

  ngOnInit(): void {
    // 订单详情
    this.fetchOrderDetails();
    // 日产量
    this.fetchDailyEfficiency();
    // 效率进度
    this.fetchEfficiencyProgress();
    // 效率明星
    this.fetchFactoryStar();
    // 时间
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
  }

  /** 订单详情 */
  async fetchOrderDetails() {
    try {
      let result: any = await this.http.getData(Cid.ORDER_DETAILS, 1, 8);
      console.log('订单详情', result);

      this.details = new OrderDetails(
        result.data[0].des4,
        result.data[0].des1,
        result.data[0].des3,
        result.data[0].des6,
        result.data[0].des5,
        result.data[0].des7,
        result.data[0].des8,
        result.data[0].des9,
        result.data[0].des10,
        result.data[0].des11,
        result.data[0].des2
      );
    } catch (e) {
      console.log(e);
    }
  }
  /** 日产量 */
  async fetchDailyEfficiency() {
    try {
      let result: any = await this.http.getData(Cid.DAILY_OUTPUT, 1, 8);
      for (let data of result.data) {
        this.dailyOutputList = [...this.dailyOutputList, new DailyOutput(
          data.des1,
          data.des2,
          data.des3,
          data.des4,
          data.des5,
          data.des6,
          data.des7,
          data.des8,
          data.des9,
        )];
      }

    } catch (e) {
      console.log(e);
    }
  }
    /** 周产量 */
  async fetchWeekOutput() {
    try {
      let result: any = await this.http.getData(Cid.WEEK_OUTPUT, 1, 8);
      for (let data of result.data) {
        this.weekOutputList = [...this.weekOutputList, new DailyOutput(
          data.des1,
          data.des2,
          data.des3,
          data.des4,
          data.des5,
          data.des6,
          data.des7,
          data.des8,
          data.des9,
        )];
      }

    } catch (e) {
      console.log(e);
    }
  }
    /** 效率进度 */
  async fetchEfficiencyProgress() {
    try {
      let result: any = await this.http.getData(Cid.EFFICIENCY_PROGRESS, 1, 8);
      this.progress = new EfficiencyProgress(
        result.data[0].des1,
        result.data[0].des2,
        result.data[0].des3,
        result.data[0].des4,
        result.data[0].des5,
        result.data[0].des6,
        result.data[0].des7,
        result.data[0].des8,
        result.data[0].des9,
        result.data[0].des10
      )
    } catch (e) {
      console.log(e);
    }
  }
    /** 效率明星 */
  async fetchFactoryStar() {
    try {
      let result: any = await this.http.getData(Cid.EFFICIENCY_STAR, 1, 8);
      this.stars = new EfficiencyStar(
        result.data[0].des2,
        result.data[0].des3,
        result.data[1].des2,
        result.data[1].des3
      )
    } catch (e) {
      console.log(e);
    }
  }
}
/** 订单详情 */
class OrderDetails {
  constructor(
    public styleNo: string = '',
    public groupNo: string = '',
    public responsiblePerson: string = '',
    public order: string = '',
    public productionOrder: string = '',
    public startDate: string = '',
    public endDate: string = '',
    public planAmount: number = null,
    public cutAmount: number = null,
    public completedAmount: number = null,
    public attendance: number = null,
  ) { }
}
/** 日产量 */
class DailyOutput {
  constructor(
    public styleNo: string,
    public target: string,
    public morning: string,
    public alternoon: string,
    public overtime: string,
    public completed: string,
    public bad: string,
    public completionRate: string,
    public efficiency: string,
  ) { }
}
/** 周产量 */
class WeekOutput {
  constructor(
    public date: string,
    public styleNo: string = '',
    public target: string = '',
    public morning: string = '',
    public alternoon: string = '',
    public overtime: string = '',
    public completed: string,
    public bad: string,
    public completionRate: string,
    public efficiency: string,
  ) { }
}

/** 效率进度 */
class EfficiencyProgress {
  constructor(
    public standardTime: number = 0,
    public actualTime: number = 0,
    public samStandard: number = 0,
    public samActual: number = 0,
    public wip: number = 0,
    public todayEfficiency: number = 0,
    public orderAmount: number = 0,
    public targetAmount: number = 0,
    public testAmount: number = 0,
    public reworkAmount: number = 0
  ) { }
}

/** 效率明星 */
class EfficiencyStar {
  constructor(
    public groupStar: string = '',
    public groupScore: number = 0,
    public workshopStar: string = '',
    public workshopScore: number = 0
  ) { }

}
