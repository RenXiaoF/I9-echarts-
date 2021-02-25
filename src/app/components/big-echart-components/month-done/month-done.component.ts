import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';


@Component({
  selector: 'app-month-done',
  templateUrl: './month-done.component.html',
  styleUrls: ['./month-done.component.scss']
})
export class MonthDoneComponent implements OnInit {
  // echarts 图
  echartsInstance: any;
  @ViewChild('mdEchart', { static: false }) mdEchart: ElementRef;
  option = {
    color: ['#c64a5d', '#ebca72', '#2fb7c0'],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    title: {
      left: 'center',
      text: '当月设计、打样与完成情况',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 18
      }
    },
    xAxis: {
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8],
      axisLabel: {
        show: true,
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
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#5c5e6a'],
          width: 1,
          type: 'solid'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },

    },
    series: [{
      // data: [10, 20, 30, 10, 50, 60, 20, 10],
      data: [],
      type: 'line'
    },
    {
      data: [],
      type: 'line'
    },
    {
      data: [],
      type: 'line'
    }]
  };

  listData: any[] = []; // table list data

  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) {
    this.getData();
  }

  ngOnInit() {
  }
  /** 当月设计、打样与完成情况 */
  // getData() {
  //   this.http.get(this.baseUrl + btoa(JSON.stringify(this.params))).subscribe((res: any) => {
  //     const data = res.data;
  //     // console.log(data);
  //     const title = res.title;
  //     const echart = echarts.init(this.mdEchart.nativeElement);
  //     const arrx = [];
  //     const arry0 = [];
  //     const arry1 = [];
  //     const arry2 = [];
  //     data.forEach(item => {
  //       arrx.push(item.name);
  //       arry0.push(item.value1);
  //       arry1.push(item.value2);
  //       arry2.push(item.value3);
  //     });
  //     this.option.title.text = title;
  //     this.option.xAxis.data = arrx;
  //     this.option.series[0].data = arry0;
  //     this.option.series[1].data = arry1;
  //     this.option.series[2].data = arry2;

  //     echart.setOption(this.option);
  //     echart.hideLoading();

  //   });
  // }
  async getData() {
    try {
      let result = await this.apiServece.getData3(Cid.PLM_DESIGN_CENTER_TABLE);
      const data = result.item;
      let tempListData = []; // 临时存放数据的 数组
      // console.log('当月设计、打样与完成情况001', data);
      data.forEach(value => {
        tempListData = value.data;
        this.listData = value.data;
      });
      // 将两个数组 合并成一个 用于解决table滚动不连续的问题
      this.listData.push(...tempListData);
      // console.log('当月设计、打样与完成情况002', this.listData);
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
