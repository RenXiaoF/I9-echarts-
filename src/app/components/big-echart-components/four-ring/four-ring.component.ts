import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';
@Component({
  selector: 'app-four-ring',
  templateUrl: './four-ring.component.html',
  styleUrls: ['./four-ring.component.scss']
})
export class FourRingComponent implements OnInit {
  echartsInstance: any;

  constructor(
    public http: ApiService,
  ) { }
  @ViewChild('ringEchart', { static: false }) ringEchart: ElementRef;

  ringRich = {
    p: {
      color: '#ffffff',
      fontSize: 14,
      padding: [0, 0, 0, 0]
    }, nm: {
      color: '#ffffff',
      fontSize: 25,
      fontWeight: 600,
      padding: [0, 0, 30, 0]

    }, span: {
      color: '#ffffff',
      fontSize: 16,
      padding: [0, 0, 120, 0]

    }
  };

  option = {
    color: ['#fc8c58', '#f2e501'],
    title: {
      left: 'center',
      text: '今日效率分析',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 18
      }
    },
    series: [{
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['14%', '50%'],
      data: [],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        fontSize: 16,
        lineHeight: 10,
        position: 'center',
        formatter: function (params) { // 默认显示第一个数据
          if (params.dataIndex === 0) {
            return '{p|' + '计划率' + '}' + '\n{nm|' + params.percent + '%}' + '\n{span|' + '同比上升5%' + '}'
          } else {
            return ''
          }
        },
        rich: this.ringRich
      },
    }, {
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['38%', '50%'],
      data: [],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        fontSize: 16,
        lineHeight: 10,
        position: 'center',
        formatter: function (params) { // 默认显示第一个数据
          if (params.dataIndex === 0) {
            return '{p|' + '上线率' + '}' + '\n{nm|' + params.percent + '%}' + '\n{span|' + '同比下降5%' + '}'
          } else {
            return ''
          }
        },
        rich: this.ringRich
      },
    }, {
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['63%', '50%'],
      data: [],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        fontSize: 16,
        lineHeight: 10,
        position: 'center',
        formatter: function (params) { // 默认显示第一个数据
          if (params.dataIndex === 0) {
            return '{p|' + '交货率' + '}' + '\n{nm|' + params.percent + '%}' + '\n{span|' + '同比上升5%' + '}'
          } else {
            return ''
          }
        },
        rich: this.ringRich
      },
    }, {
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['88%', '50%'],
      data: [],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        fontSize: 16,
        lineHeight: 10,
        position: 'center',
        formatter: function (params) { // 默认显示第一个数据
          if (params.dataIndex === 0) {
            return '{p|' + '时效率' + '}' + '\n{nm|' + params.percent + '%}' + '\n{span|' + '同比下降5%' + '}'
          } else {
            return ''
          }
        },
        rich: this.ringRich
      },
    }]

  };

  ngOnInit() {
    this.getData() ;
  }

  async getData() {
    try {
      let res = await this.http.getData(Cid.TODAY_EFFICIENCY_ANALYSIS, 1, 4);
      const echart = echarts.init(this.ringEchart.nativeElement);
      // console.log('32123',res);
      const data = res.data;
      this.option.series[0].data = [{ value: data[0].value1 }, { value: Math.abs(data[0].value2) }];
      this.option.series[1].data = [{ value: data[1].value1 }, { value: Math.abs(data[1].value2) }];
      this.option.series[2].data = [{ value: data[2].value1 }, { value: Math.abs(data[2].value2) }];
      this.option.series[3].data = [{ value: data[3].value1 }, { value: Math.abs(data[3].value2) }];
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
