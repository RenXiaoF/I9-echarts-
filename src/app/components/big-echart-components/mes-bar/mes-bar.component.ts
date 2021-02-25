import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';

@Component({
  selector: 'app-mes-bar',
  templateUrl: './mes-bar.component.html',
  styleUrls: ['./mes-bar.component.scss']
})
export class MesBarComponent implements OnInit {

  echartsInstance: any;  // echart实例

  constructor(
    public http: HttpClient,
    public apiServe: ApiService,
  ) {
    this.getData();
  }

  @ViewChild('mesEchart', { static: false }) mesEchart: ElementRef;
  option = {
    color: ['#ec9373', '#ab63af'],
    grid: {
      height: 150,
      left: '5%',
      right: '5%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#fff'
        }
      },
    },
    yAxis: {
      axisLabel: {
        show: false,
        interval: 'auto',
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        show: false

      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        type: 'bar',
        data: [],
        barWidth: 20,
        barGap: '30%',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 9
              }
            }
          }
        },

      },
      {
        type: 'bar',
        barWidth: 20,
        barGap: '30%',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 9
              }
            }
          }
        },

      }
    ]
  };

  ngOnInit() {
  }
  async getData() {
    try {
      let res: any = await this.apiServe.getData(Cid.APP_MES_BAR, 1, 10);
      // console.log('mescharts', res);
      const echart = echarts.init(this.mesEchart.nativeElement);
      let data = res.data;
      const arrx = [];
      const arry0 = [];
      const arry1 = [];
      data.forEach(item => {
        arrx.push(item.name);
        arry0.push(item.value1);
        arry1.push(item.value2);
      });
      this.option.xAxis.data = arrx;
      this.option.series[0].data = arry0;
      this.option.series[1].data = arry1;
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
