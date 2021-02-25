import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cid } from 'src/app/models/cid';
import { ApiService } from 'src/service/api.service';
import * as echarts from 'echarts';
import { EchartsService } from 'src/service/echarts.service';

@Component({
  selector: 'app-pie-quality',
  templateUrl: './pie-quality.component.html',
  styleUrls: ['./pie-quality.component.scss']
})
export class PieQualityComponent implements OnInit {

  taxno: string = ''; //
  public echartsInstance: any;  // echart实例

  @ViewChild('pieEchart', { static: false }) pieEchart: ElementRef;
  option = {
    color: ['#06a7ef', '#f69b29', '#994579'],
    grid: {
      width: '50%',
      height: '50%',
    },
    series: [{
      type: 'pie',
      radius: '80%',
      center: ['50%', '55%'],
      data: [
        // {
        //     value: '10',
        //     name: '尺寸不良'
        // }, {
        //     value: '5',
        //     name: '眼洞'
        // }, {
        //     value: '3',
        //     name: '面料不良'
        // }, {
        //     value: '1',
        //     name: '面料不良 '
        // },
      ],
      animation: false,
      label: {
        formatter: '{b},{c}',
        position: 'outer',
        alignTo: 'none',
        bleedMargin: 5
      },
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }]
  };


  constructor(
    public api: ApiService,
    public http: HttpClient,
    public echartload: EchartsService

  ) { }

  ngOnInit() {
    this.getPieData();
  }

  /** quality pie 饼状图 */
  async getPieData() {
    try {
      let result: any = await this.api.getData(Cid.QUALITY_PIE, 1, 8);
      console.log('quality pie ', result);
      const data = result.data;
      const arr: any[] = [];
      const echart = echarts.init(this.pieEchart.nativeElement);
      data.forEach(item => {
        arr.push({ name: item.des1, value: item.des2 });
      });
      this.option.series[0].data = arr;
      echart.setOption(this.option);
      echart.hideLoading();

    } catch (e) {
      console.log(e);
    }
  }

  /** loading */
  onEchartsLoadService(e) {
    this.echartload.onChartInit(e);
  }

}
