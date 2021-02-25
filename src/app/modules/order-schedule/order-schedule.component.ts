import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-schedule',
  templateUrl: './order-schedule.component.html',
  styleUrls: ['./order-schedule.component.scss']
})
export class OrderScheduleComponent implements OnInit {

  nowTime: number = new Date().getTime(); // 当前时间

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
  }

}
