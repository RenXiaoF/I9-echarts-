import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  echartsInstance: any;

  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) { this.getData() }

  @ViewChild('scheduleEchart', { static: false }) scheduleEchart: ElementRef;


  baseUrl = ' http://112.74.208.251:5419/ross/api/getDataIntf?paramet=';
  params = {
    "taxno": '91440116726790339T',
    "cid": 64,
    "page": 1,
    "limit": "7",
    "sort": ""
  }

  option = {
    color: ['#ffdb4b', '#97d22b', '#ffffff'],

    title: {
      left: 'left',
      text: '',
      y: '20',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 18,

      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      orient: 'horizontal',
      x: 'right',
      y: '20',
      data: ['采购', '回料'],
      textStyle: {
        color: '#ffffff',
      },
      align: 'right',

    },
    xAxis: {
      type: 'category',
      // data: ['1月', '2月', '4月', '6月', '8月', '10月', '12月'],
      data: [],
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#fff',
          fontSize: 16

        }
      },
      axisTick: {
        show: false
      },
    },
    yAxis: {
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#4e4e5b'],
          width: 1,
          type: 'solid'
        }
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#fff',
          fontSize: 16

        },
      },
      axisTick: {
        show: false
      },

    },
    series: [
      {
        name: '采购',
        type: 'bar',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 12
              }
            }
          }
        },

      },
      {
        name: '回料',
        type: 'bar',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 12
              }
            }
          }
        },

      },
      // {
      //     type: 'line',
      //     data: [60, 80, 40, 70, 80, 60, 40],
      //     itemStyle: {
      //         normal: {
      //             label: {
      //                 show: false,
      //                 position: 'top',
      //                 textStyle: {
      //                     color: '#ffffff',
      //                     fontSize: 12
      //                 }
      //             }
      //         }
      //     },

      // }
    ]
  }

  ngOnInit() {
  }

  async getData() {
    try {
      let res = await this.apiServece.getData(Cid.APP_SCHEDULE, 1, 7);
      // console.log(res);
      const data = res.data;
      // console.log(data);
      const title = res.title;
      const echart = echarts.init(this.scheduleEchart.nativeElement);
      const arrx = [];
      const arry0 = [];
      const arry1 = [];
      const arry2 = [];
      data.forEach(item => {
        arrx.push(item.name);
        arry0.push(item.value1);
        arry1.push(item.value2);
      });
      this.option.title.text = title;
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
