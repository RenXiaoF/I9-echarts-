import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EchartsService {
  loadingStyle = {
    text: '加载中',
    color: '#54a2d5',
    textColor: '#fff',
    maskColor: 'rgba(255, 255, 255, 0)',
    zlevel: 0
  }

  constructor() { }
  // loading
  onChartInit(ec) {
    let echartsInstance = ec;
    if (echartsInstance) {
      echartsInstance.showLoading(
        this.loadingStyle
      );
    }
  }

// 定时
  maxTime = 10000;
  minTime = 5000;
  setTime(){   
    return Math.floor(Math.random() * (this.maxTime - this.minTime) ) + this.minTime;
  }




}
