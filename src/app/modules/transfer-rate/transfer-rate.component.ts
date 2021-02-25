import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-transfer-rate',
  templateUrl: './transfer-rate.component.html',
  styleUrls: ['./transfer-rate.component.scss']
})
export class TransferRateComponent implements OnInit {
  nowTime: number = new Date().getTime();
  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
  }

}
