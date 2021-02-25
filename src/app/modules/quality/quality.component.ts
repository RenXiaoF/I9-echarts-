import { Component, OnInit } from '@angular/core';
import { Cid } from 'src/app/models/cid';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {

  public boardTitle: string = ''; // 看板title
  taxno: string = ''; //
  details = new OrderDetails(); // 订单详情
  reWorkNumber = new EymAndRework(); // 人员 + 返工数
  nowTime: number = new Date().getTime();  // 当前时间

  constructor(
    public http: ApiService,
  ) { }

  ngOnInit() {
    // 订单详情
    this.fetchOrderDetails();
    // 右侧 人员+返工数
    this.fetchBackNum();
    // 时间
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
  }

  /** 订单详情 */
  async fetchOrderDetails() {
    try {
      let result: any = await this.http.getData(Cid.QUALITY_PLAN, 1, 8);
      // console.log('订单详情', result);
      this.boardTitle = result.title;
      this.details = new OrderDetails(
        result.data[0].des4, // 款号 1
        result.data[0].des1, // 组名 2
        result.data[0].des2, // 负责人 3
        result.data[0].des6, // 定单
        result.data[0].des5, // 生产单
        result.data[0].des7, //  订单数
        result.data[0].des8, // 实际数
        result.data[0].des9, // 检验数
        result.data[0].des10, // 返工数
        result.data[0].des3, // 出勤人数
        result.data[0].des11, // 返工率

      );
    } catch (e) {
      console.log(e);
    }
  }
  /** 右侧 人员+返工数 */
  async fetchBackNum() {
    try {
      let result: any = await this.http.getData(Cid.BACK_NUM, 1, 8);
      console.log('右侧 人员+返工数', result);
      this.reWorkNumber = new EymAndRework(
        result.data[0].des1, // 第一个人员
        result.data[0].des2, // 第二个返工数
        result.data[1].des1, // 第二个人员
        result.data[1].des2, // 第一个返工数
        result.data[2].des1, // 第三个人员
        result.data[2].des2, // 第三个返工数
      );
    } catch (e) {
      console.log(e);
    }
  }

}

/** 订单详情 */
class OrderDetails {
  constructor(
    public styleNo: string = '', // 款号
    public groupNo: string = '', // 组名
    public responsiblePerson: string = '', // 负责人
    public order: string = '', //  订单
    public productionOrder: string = '', // 生产单
    public planAmount: number = null, // 订单数
    public completedAmount: number = null, // 实际数
    public chickAmount: string = '', // 检验数
    public cutAmount: number = null, // 返工数
    public attendance: number = null, // 出勤人数
    public reworkRate: string = '', // 返工率
  ) { }
}
/** 右侧 人员+返工数 */
class EymAndRework{
  constructor(
    public nameOne: string = '',     // 第一个人员
    public reworkOne: string = '',   // 第二个返工数
    public nametwo: string = '',     // 第二个人员
    public reworkTwo: string = '',   // 第一个返工数
    public nameThree: string = '',   // 第三个人员
    public reworkThree: string = '', // 第三个返工数

  ){}
}
