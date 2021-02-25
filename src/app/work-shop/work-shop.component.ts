import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { EchartsService } from 'src/service/echarts.service';
import { HttpClient } from '@angular/common/http';
import { Cid } from 'src/app/models/cid';
@Component({
  selector: 'app-work-shop',
  templateUrl: './work-shop.component.html',
  styleUrls: ['./work-shop.component.scss']
})
export class WorkShopComponent implements OnInit {

  echartsInstance: any;
  T: any;

  constructor(
    public apiServiece: ApiService,
    public http: HttpClient,
    private el: ElementRef,
    private renderer: Renderer2,
    public echartload: EchartsService

  ) { }
  @ViewChild('wrap', { static: false }) wrap: ElementRef;


  @ViewChild('oneEchart', { static: false }) oneEchart: ElementRef;
  @ViewChild('threeEchart', { static: false }) threeEchart: ElementRef;
  @ViewChild('fourEchart', { static: false }) fourEchart: ElementRef;
  @ViewChild('fiveEchart', { static: false }) fiveEchart: ElementRef;
  @ViewChild('sixEchart', { static: false }) sixEchart: ElementRef;
  @ViewChild('sevenEchart', { static: false }) sevenEchart: ElementRef;
  @ViewChild('eightEchart', { static: false }) eightEchart: ElementRef;
  @ViewChild('nineEchart', { static: false }) nineEchart: ElementRef;


  data_one = {
    fno: 0,
    des1: "0",
    des2: "0"
  };
  data_two = {
    fno: 0,
    des1: "0",
    des2: "0"
  };

  charts_grid = {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  };
  option = {};


  // 图表初始化设置
  boxOne = {
    title: {
      left: 'center',
      text: '各款生产计划',
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
        fontSize: 18
      }
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: this.charts_grid,
    xAxis: [
      {

        barWidth: 1,
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true,
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#ffffff'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }

      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [],
        barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
        barCategoryGap: '50%',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 16
              }
            }
          }
        },
      }
    ]
  };

  boxThree = {
    title: {
      left: 'center',
      text: '',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 18
      }
    },
    color: ['#06dbe9', '#ed9848'],
    grid: this.charts_grid,
    legend: {
      orient: 'vertical',
      x: 'right',
      y: 'top',
      data: ['计划数', '实际数'],
      textStyle: {
        color: '#ffffff',
      },
      align: 'left',
      icon: 'rect',
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      }
    },
    series: [{
      name: '计划数',
      data: [],
      type: 'line'
    },
    {
      name: '实际数',
      data: [],
      type: 'line'
    }]
  };

  boxFour = {
    color: ['#a669b6', '#ff9156'],
    grid: this.charts_grid,
    title: {
      left: 'center',
      text: '',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 18
      }
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      y: 'top',
      data: ['完成', '返修'],
      textStyle: {
        color: '#ffffff',
      },
      align: 'left',

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
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      },
    },
    yAxis: {
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#fff'
        }
      },
    },
    series: [
      {
        name: '完成',
        type: 'bar',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
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
        name: '返修',
        type: 'bar',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 12
              }
            }
          }
        },

      }
    ]
  };

  boxFive = {
    grid: this.charts_grid,
    title: {
      left: 'center',
      text: '',
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
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      }, axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      },
      data: []
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %',
        textStyle: {
          color: '#fff'
        }
      },
      show: true,
    },
    series: [{
      symbol: 'circle',
      symbolSize: 1,
      data: [],
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          label: {
            show: true,
            formatter: '{c}%',

          },
          color: '#ffffff',
          lineStyle: {
            color: '#93a477' //折线颜色
          }
        },

      }
    }]

  };

  boxSix = {
    grid: this.charts_grid,
    title: {
      left: 'center',
      text: '',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 18
      }
    },
    // legend: {
    //     orient: 'vertical',
    //     x: 'right',
    //     y: 'top',
    //     data: ['呼叫', '响应'],
    //     textStyle: {
    //         color: '#ffffff',
    //     },
    //     align: 'left',
    //     icon: 'rect',
    // },
    xAxis: {
      type: 'category',
      data: ['0', '5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7'],
      axisTick: {

        show: false

      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      },
    },
    yAxis: {
      type: 'value',
      // data: ['0', '50', '10', '15', '20'],
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#fff'
        }
        // formatter: '{value} %'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      show: true,
    },
    series: [{
      name: '呼叫',
      symbol: 'circle',
      symbolSize: 1,
      data: [],
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          label: { show: true },
          color: '#ffffff',
          lineStyle: {
            color: '#ff9c35' // 折线颜色
          }
        },

      }
    }, {
      name: '响应',
      symbol: 'circle',
      symbolSize: 1,
      data: [],
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          label: { show: true },
          color: '#ffffff',
          lineStyle: {
            color: '#c23531' // 折线颜色
          }
        },

      }
    },
    ]

  };
  boxSeven = {
    title: {
      left: 'center',
      text: '',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 18
      }
    },
    grid: {
      left: '0',
      top: '20',
      right: '20',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      splitLine: { show: false },//坐标轴在 grid 区域中的分隔线
      axisLabel: { show: false },//坐标轴刻度标签
      axisTick: { show: false },//坐标轴刻度
      axisLine: { show: false },//坐标轴轴线
    },
    yAxis: {
      type: 'category',
      axisTick: { show: false },
      axisLine: { show: false },
      data: [],
      axisLabel: {
        show: true,
        margin: 80,
        interval: 'auto',
        formatter: '{value}',
        textStyle: {
          align: 'left',
          color: '#fff'
        }
      },
    },
    series: [
      {
        name: '%',
        type: 'bar',
        barWidth: 19,
        data: [],
        label: {
          show: true,
          position: 'right',
          offset: [-60, 0],
          formatter: '{c}{a}',
          color: 'white',
          fontSize: 16
        },
        itemStyle: {
          normal: {
            barBorderRadius: 10,
            color: '#f0494a'

          }
        },
        zlevel: 1//柱状图所有图形的 zlevel 值,zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
      },
      {
        name: '进度条背景',
        type: 'bar',
        barGap: '-100%',
        barWidth: 19,
        data: [],
        color: '#f9d843',//柱条颜色
        itemStyle: {
          normal: {
            barBorderRadius: 10
          }
        }
      }
    ]


  };
  boxEight = {
    color: ['#30bad6', '#edcd46'],
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
      name: 'pie_1',
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['20%', '50%'],
      data: [],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        fontSize: 16,
        lineHeight: 20,
        position: 'center',
        formatter: function (params) { // 默认显示第一个数据
          if (params.dataIndex === 0) {
            return '{p|' + params.name + '}' + '\n{nm|' + params.percent + '%}'
          } else {
            return ''
          }
        },
        rich: {
          p: {
            color: '#ffffff',
            fontSize: 16
          },
          nm: {
            color: '#ffffff',
            fontSize: 18,
          }
        }
      },
    },
    {
      name: 'pie_2',
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['50%', '50%'],
      data: [],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        fontSize: 16,
        lineHeight: 20,
        position: 'center',
        formatter: function (params) {
          if (params.dataIndex === 0) {
            return '{p|' + params.name + '}' + '\n{nm|' + params.percent + '%}'
          } else {
            return ''
          }
        },
        rich: {
          p: {
            color: '#ffffff',
            fontSize: 16
          },
          nm: {
            color: '#ffffff',
            fontSize: 18,
          }
        }
      },
    }, {
      name: 'pie_3',
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['80%', '50%'],
      data: [],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        lineHeight: 20,
        position: 'center',
        formatter: function (params) { // 默认显示第一个数据
          if (params.dataIndex === 0) {
            return '{p|' + params.name + '}' + '\n{nm|' + params.percent + '%}'
          } else {
            return ''
          }
        },
        emphasis: {
          formatter: function (params) {
            if (params.dataIndex != 0) {
              return ''
            }
          },
        },
        rich: {
          p: {
            color: '#ffffff',
            fontSize: 16
            // backgroundColor: "white" // 覆盖index=0时的数据
          },
          nm: {
            color: '#ffffff',
            fontSize: 18,
            // backgroundColor: "white" // 覆盖index=0时的数据
          }
        }
      },
    }]
  };

  boxNine = {
    color: ['#06dbe9', '#ed9848'],
    grid: this.charts_grid,
    title: {
      left: 'center',
      text: '',
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
      name: '耗电单位：KW/24H',
      nameTextStyle: {
        color: "#ffffff",
        fontSize: 12,
        padding: [0, 0, 500, -130]
      },
      data: [],
      splitLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      }, axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      },

    },
    yAxis: {
      nameLocation: 'end',
      name: '耗电情况',
      nameTextStyle: {
        color: "#ffffff",
        fontSize: 12,
        padding: 10
      },
      splitLine: {
        show: false
      },
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        textStyle: {
          color: '#fff'
        }
      },
      show: true,
    },
    series: [{

      symbol: 'circle',
      symbolSize: 1,
      data: [],
      type: 'line',
      smooth: true,
      areaStyle: {
        normal: {
          areaStyle: {
            normal: {
              opacity: 0.2,//设置透明度
              lineStyle: {
                color: '#2d7b9f' //改变折线颜色
              }
            }
          },
        }
      }
    }, {
      symbol: 'circle',
      symbolSize: 1,
      data: [],
      type: 'line',
      smooth: true,
      areaStyle: {
        normal: {
          normal: {
            opacity: 0.2,
            lineStyle: {
              color: '#db8c6b'
            }
          }
        }
      }
    }],

  }


  nowTime: number = new Date().getTime();


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.getBoxOne();
    this.fetchSingleMonthOrderCompletion();
    this.fetchSingleMonthOrderOverdue();
    this.fetchPlannedAndActualProduction();
    this.fetchSevenDayDataAnalysis();
    this.getBoxFive();
    this.getBoxSix();
    this.getBoxSeven();
    this.getBoxEight();
    this.getBoxNine();
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
    // this.fleshData(this.getBoxOne);
    // this.fleshData(this.getBoxTwo);
    // this.fleshData(this.getBoxThree);
    // this.fleshData(this.getBoxFour);
    // this.fleshData(this.getBoxFive);
    // this.fleshData(this.getBoxSix);
    // this.fleshData(this.getBoxSeven);
    // this.fleshData(this.getBoxEight);
    // this.fleshData(this.getBoxNine);
  }
  /** 1. 柱状图 */
  async getBoxOne() {
    try {
      let res = await this.apiServiece.getData(Cid.PRODUCTION_PLAN, 1, 8);
      // console.log(res);
      const echart = echarts.init(this.oneEchart.nativeElement);
      let data = res.data;
      let arr_x = [];
      let arr_y = [];
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y.push(item.des2);
      });
      echart.setOption({
        title: { text: res.title },
        xAxis: [{ data: arr_x }],
        series: [{ data: arr_y }]
      })
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }

  }
  /** 2.1 数据  ==2  2和3 一起 */
  async fetchSingleMonthOrderCompletion() {
    try {
      let result = await this.apiServiece.getData(Cid.SINGLE_MONTH_ORDER_COMPLETION, 1, 8);
      this.data_one = result.data[0];
    } catch (e) {
      console.log(e);
    }
  }
  /** 2.2  数据  ==  3  2和3 一起 */
  async fetchSingleMonthOrderOverdue() {
    try {
      let result = await this.apiServiece.getData(Cid.SINGLE_MONTH_ORDER_OVERDUE, 1, 8);
      this.data_two = result.data[0];
    } catch (e) {
      console.log(e);
    }
  }
  /** 4. 折线图 */
  async fetchPlannedAndActualProduction() {
    try {
      let result = await this.apiServiece.getData(Cid.PLANNED_AND_ACTUAL_PRODUCTION_OF_THE_DAY, 1, 8);
      console.log('4. 折线图', result);

      const echart = echarts.init(this.threeEchart.nativeElement);
      let data = result.data;
      let arr_x = [];
      let arr_y1 = [];
      let arr_y2 = [];
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y1.push(item.des2);
        arr_y2.push(item.des3);
      });
      echart.setOption({
        title: { text: result.title },
        xAxis: [{ data: arr_x }],
        series: [
          {
            name: '计划数',
            data: arr_y1,
            type: 'line'
          },
          {
            name: '实际数',
            data: arr_y2,
            type: 'line'
          }
        ]
      })
      echart.hideLoading();
    } catch (e) {
      console.log(e)
    }
  }
  /** 5. 柱状图 */
  async fetchSevenDayDataAnalysis() {
    try {
      let result = await this.apiServiece.getData(Cid.SEVEN_DAY_DATA_ANALYSIS, 1, 8);
      const echart = echarts.init(this.fourEchart.nativeElement);
      let data = result.data;
      let arr_x = [];
      let arr_y1 = [];
      let arr_y2 = [];
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y1.push(item.des2);
        arr_y2.push(item.des3);
      });
      echart.setOption({
        title: { text: result.title },
        xAxis: [{ data: arr_x }],
        series: [
          {
            data: arr_y1,
          },
          {
            data: arr_y2,
          }
        ]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 6.  */
  async getBoxFive() {
    try {
      let res = await this.apiServiece.getData(Cid.SEVEN_DAY_OFF_LINE_PROCESS, 1, 8);
      // console.log(res);
      const echart = echarts.init(this.fiveEchart.nativeElement);
      let data = res.data;
      let arr_x = [];
      let arr_y = [];
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y.push(item.des2);
      });
      echart.setOption({
        title: { text: res.title },
        xAxis: [{ data: arr_x }],
        series: [
          {
            data: arr_y,
          }
        ]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 7. */
  async getBoxSix() {
    try {
      let res = await this.apiServiece.getData(Cid.SEVEN_DAY_FIX_REACTION, 1, 8);
      // console.log(res);
      const echart = echarts.init(this.sixEchart.nativeElement);
      let data = res.data;
      let arr_x = [];
      let arr_y1 = [];
      let arr_y2 = [];
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y1.push(item.des2);
        arr_y2.push(item.des3);
      });
      echart.setOption({
        title: { text: res.title },
        xAxis: [{ data: arr_x }],
        series: [
          {
            data: arr_y1,
          },
          {
            data: arr_y2,
          }
        ]
      })
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 8. */
  async getBoxSeven() {
    try {
      let res = await this.apiServiece.getData(Cid.EQUIPMENT_OPERATION, 1, 8);
      // console.log(res);
      const echart = echarts.init(this.sevenEchart.nativeElement);
      let data = res.data;
      let arr = [];
      let arr_y = [];
      data.forEach(item => {
        arr_y.push(item.des1);
        arr.push(item.des2);

      });
      let dx;
      if (arr.length == 0) {
        dx = 0;
      } else {
        dx = [100, 100, 100, 100]
      }
      echart.setOption({
        title: { text: res.title },
        yAxis: {
          data: arr_y,
        },
        series: [
          {
            data: arr
          },
          {
            data: dx
          }
        ]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 9  饼装图 */
  async getBoxEight() {
    //  9.1
    try {
      let res = await this.apiServiece.getData(Cid.TODAY_PASS_RATE_ANALYSIS, 1, 8);
      let data = res.data;
      const echart = echarts.init(this.eightEchart.nativeElement);
      let arr = [];
      data.forEach(item => {
        arr.push({ value: item.des2, name: item.des1 })

      });
      echart.setOption({
        series: [
          {
            name: 'pie_1',
            data: arr,
          }
        ]
      })
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
    //  9.2
    try {
      let res1 = await this.apiServiece.getData(Cid.TODAY_COMPLETED_RATE_ANALYSIS, 1, 8);
      let data = res1.data;
      const echart = echarts.init(this.eightEchart.nativeElement);

      let arr = [];
      data.forEach(item => {
        arr.push({ value: item.des2, name: item.des1 })

      });
      echart.setOption({
        series: [
          {
            name: 'pie_2',
            data: [
              { value: arr[0].value, name: arr[0].name, itemStyle: { color: '#ffe14d' } },
              { value: arr[1].value, name: arr[1].name, itemStyle: { color: '#34cceb' } }
            ],
          }
        ]
      });
    } catch (e) {
      console.log(e);
    }
    // 9.3
    try {
      let res2 = await this.apiServiece.getData(Cid.TODAY_REFIX_RATE_ANALYSIS, 1, 8);
      let data = res2.data;
      const echart = echarts.init(this.eightEchart.nativeElement);

      let arr = [];
      data.forEach(item => {
        arr.push({ value: item.des2, name: item.des1 })

      });
      echart.setOption({
        series: [
          {
            name: 'pie_3',
            data: arr,
          }
        ]
      });
    } catch (e) {
      console.log(e);
    }
  }
  /** 10. */
  async getBoxNine() {
    try {
      let res = await this.apiServiece.getData(Cid.WORKSHOP_CONSUME_POWER_ANALYSIS, 1, 8);
      // console.log(res);
      const echart = echarts.init(this.nineEchart.nativeElement);
      let data = res.data;
      let arr_x = [];
      let arr_y1 = [];
      let arr_y2 = [];
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y1.push(item.des2);
        arr_y2.push(item.des3);
      });
      echart.setOption({
        title: { text: res.title },
        xAxis: [{ data: arr_x }],
        series: [
          {
            data: arr_y1,
          },
          {
            data: arr_y2,
          }
        ]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }

  }

  /** loading */
  onEchartsLoadService(e) {
    this.echartload.onChartInit(e);
  }


  /** 监听 window.resize 对 整个画面进行缩放 */
  @HostListener('window:resize', ['$event'])
  onReset(event: any) {
    if (this.T) {
      clearTimeout(this.T);
    }
    this.T = setTimeout(() => {
      // 获取待缩放节点
      const dom = this.el.nativeElement.querySelector('.wrap');
      const windowWidth = window.innerWidth;
      const scale = (windowWidth || 1920) / 1920;
      this.renderer.setStyle(dom, 'transform', `scale(${scale})`);
    }, 300);
  }

}
