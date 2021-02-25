import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cid } from 'src/app/models/cid';
import { ApiService } from 'src/service/api.service';
import * as echarts from 'echarts';
import { EchartsService } from 'src/service/echarts.service';

@Component({
  selector: 'app-defect-quality',
  templateUrl: './defect-quality.component.html',
  styleUrls: ['./defect-quality.component.scss']
})
export class DefectQualityComponent implements OnInit {

  taxno: string = ''; //
  public echartsInstance: any;  // echart实例

  @ViewChild('defectEchart', { static: false }) defectEchart: ElementRef;
  option = {
    grid: {
      top: '0',
      height: '100%'
    },
    color: ['blue'],
    yAxis: {
      show: true,
      boundaryGap: true,
      type: "category",
      data: ["疵点1", "疵点2", "疵点3", "疵点4", "疵点5", "疵点6", "疵点7", "疵点8", "疵点9", "疵点10", "疵点11", "疵点12", "疵点13", "疵点14", "疵点15", "疵点16"],
      axisLine: {       //y轴
        show: false

      },
      axisTick: {       // y轴刻度线
        show: false
      },
      splitLine: {     // 网格线
        show: false
      }
    },
    xAxis: {
      show: false,
      splitLine: {
        show: false
      }
    },
    series: [
      {
        barWidth: 10,
        // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 3, 1, 3, 3, 4],
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: 'black',
                fontSize: 16
              }
            }
          }
        },
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(220, 220, 220, 0.8)",
        },
      },
    ],
  }

  constructor(
    public api: ApiService,
    public http: HttpClient,
    public echartload: EchartsService
  ) { }

  ngOnInit() {
    this.getDefectData();
  }

  /** quality defect 疵点图 */
  async getDefectData() {
    try {
      let result: any = await this.api.getData(Cid.QUALITY_DEFECT, 1, 16);
      console.log('quality defect 疵点图 ', result);
      const data = result.data;
      const arr: any[] = [];
      const echart = echarts.init(this.defectEchart.nativeElement);
      data.forEach(item => {
        arr.push(item.des2);
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
