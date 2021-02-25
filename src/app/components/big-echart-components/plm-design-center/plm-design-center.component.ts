import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';



@Component({
  selector: 'app-plm-design-center',
  templateUrl: './plm-design-center.component.html',
  styleUrls: ['./plm-design-center.component.scss']
})
export class PlmDesignCenterComponent implements OnInit {
  echartsInstance: any;
  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) {
    this.getData();
  }
  @ViewChild('plmEchart', { static: false }) plmEchart: ElementRef;

  // baseUrl = ' http://112.74.208.251:5419/ross/api/getDataIntf?paramet=';
  // params = {
  //   taxno: '91440116726790339T',
  //   cid: 50,
  //   page: 1,
  //   limit: 4,
  //   sort: ''
  // };

  // // table
  // baseUrl2 = 'http://59.33.34.118:5417/ross/api/getkbdata:POST?paramet=';
  // params2 = [{
  //   taxpayerid: '91442000334746961H',
  //   cid: 9101,

  // }];

  // 初始化图表
  option: any = {
    color: ['#ffd447'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        // data: ['设计中', '打样中', '已完成', '已批板'],
        data: [],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ffffff',
            fontSize: '16'
          }
        }
      }
    ],
    yAxis: [
      {
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
            color: '#ffffff',
            fontSize: '16'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: 40,
        // data: [50, 35, 30, 20],
        data: [],
        barGap: '80%', /*多个并排柱子设置柱子之间的间距*/
        barCategoryGap: '50%',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              formatter: '{c}款',
              textStyle: {
                color: '#ffd447',
                fontSize: 16
              }
            }
          }
        },
      }
    ]
  };

  ngOnInit() {
  }
  /** PLM设计中心 */
  async getData() {
    try {
      let result = await this.apiServece.getData3(Cid.PLM_DESIGN_CENTER);
      const data = result.item;
      console.log('PLM设计中心', data);

      const arryx: any[] = [];
      const arryy: any[] = [];
      // console.log(data);
      const echart = echarts.init(this.plmEchart.nativeElement);
      data.forEach(item => {
        item.data.forEach(val => {
          arryx.push(val.name);
          arryy.push(val.value1);
        });
      });

      this.option.xAxis[0].data = arryx;
      this.option.series[0].data = arryy;
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
