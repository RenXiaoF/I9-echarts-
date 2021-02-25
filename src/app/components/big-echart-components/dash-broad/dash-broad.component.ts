import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';


@Component({
  selector: 'app-dash-broad',
  templateUrl: './dash-broad.component.html',
  styleUrls: ['./dash-broad.component.scss']
})
export class DashBroadComponent implements OnInit {
  echartsInstance: any;
  option = {
    title: {
      text: '',
      top: 20,
      left: 20,
      textStyle: {
        fontSize: 24,
        color: '#fff'
      }
    },
    series: [
      {
        name: '-',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 220,
        splitNumber: 11,
        radius: '120%',
        center: ['50%', '80%'],
        startAngle: 180,
        endAngle: 0,
        axisLine: {          // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 30,
            color: [[0.4, '#42E445'], [0.5, '#EECD5F'], [1, '#EE493B']] // 每段颜色设置
          }
        },
        axisTick: {          // 坐标轴小标记
          show: false
        },
        splitLine: {         // 分隔线
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{ value: '', name: '' }]
      },
    ]
  };
  constructor(
    public http: ApiService,

  ) { }

  @ViewChild('dashEchart', { static: false }) dashEchart: ElementRef;

  ngOnInit() {
    this.getData()
  }



  async getData() {
    try {
      let res = await this.http.getData(Cid.INVENTORY_WARNING, 1, 1);
      // console.log('dash',res);
      let info = res.data
      const echart = echarts.init(this.dashEchart.nativeElement);
      this.option.series[0].data = [{ value: info[0].value1, name: '' }]
      echart.setOption(this.option);
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }

  // loading
  onChartInit(ec) {
    this.echartsInstance = ec;
    if (this.echartsInstance) {
      this.echartsInstance.showLoading();
    }
  }

}
