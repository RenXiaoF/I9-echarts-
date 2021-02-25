import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-balance-rate',
  templateUrl: './balance-rate.component.html',
  styleUrls: ['./balance-rate.component.scss']
})
export class BalanceRateComponent implements OnInit {
  nowTime: number = new Date().getTime();
  updateTime: number;
  @ViewChild('balanceRateEchart', { static: false }) balanceRateEchart: ElementRef;
  option = {
    title: {
      left: 'center',
      text: '平衡率',
      textStyle: {
        // 文字颜色
        color: '#ffffff',
        // 字体风格,'normal','italic','oblique'
        fontStyle: 'normal',
        // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        fontWeight: 'bold',
        // 字体系列
        fontFamily: 'sans-serif',
        // 字体大小
        fontSize: 25
      }
    },
    color: ['#1f3fc6'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
        data: ['4A', '4B', '4C', '4D', '5A', '5B', '5C'],
        axisTick: {
          alignWithLabel: true,
          show: true
        },
        axisLine: {
          lineStyle: {
            color: '#ffffff'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 20
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value} %',
          textStyle: {
            color: '#fff',
            fontSize: '20'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#ffffff'
          }
        },

      }
    ],
    series: [
      {
        // name: '直接访问',
        type: 'bar',
        barWidth: 60,
        data: [82, 86, 88, 88, 70, 70, 88],
        barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
        barCategoryGap: '50%',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              formatter: '{c}%',
              textStyle: {
                color: '#ffffff',
                fontSize: 20
              }
            }
          }
        },
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
    this.updateTime = new Date().getTime();
  }


}
