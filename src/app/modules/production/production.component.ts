import { Component, HostListener, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Cid } from 'src/app/models/cid';
import { ApiService } from 'src/service/api.service';
import { EchartsService } from 'src/service/echarts.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  public echartsInstance: any; // echart 实例
  public T: any; // 控制缩放

  public taxno: string = ''; //
  public nowTime: number = new Date().getTime(); // 当前时间
  updateTime: number; // 上次刷新时间
  // 日指标监控
  public dayResulrData = [
    { des1: '' }, // 日裁剪量
    { des2: '' }, // 日线外齐套数
    { des3: '' }, // 日上线数
    { des4: '' }, // 日检验数
    { des5: '' }, // 日包装数
  ];
  // 表格数据  生产进度监控
  public tableOfProductTitle = '';
  public tableOfProduct = [];
  // 表格数据 车间生产合格率分析
  public qualifiedTitle = '';
  public qualified = [
    { des1: '' },  // 小组
    { des2: '' },  // 生产制单
    { des3: '' },  // 线外工序
    { des4: '' },  // 员工姓名
    { des5: '' },  // 完工数
    { des6: '' },  // 扎数
    { des7: '' },  // 返工数
  ];

  // 图表 左一 车间生产合格率分析
  @ViewChild('workShopEchart', { static: false }) workShopEchart: ElementRef;
  workshopTitle = '';
  workShop = {

    color: ['#ffdb3e', '#e14c48'],
    title: {
      text: '百分比%',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 12
      }
    },
    legend: {
      orient: 'horizontal',
      x: 'right',
      y: 'top',
      data: ['日合格率%', '周合格率%'],
      align: 'left',
      icon: 'rect',
      textStyle: {
        color: '#ffffff',
      },
    },
    grid: {
      top: '30%',
      bottom: '30%',
      height: 90
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
        show: false,
        alignWithLabel: true
      },
      splitLine: {
        show: true,
        interval: 0
      },
      boundaryGap: false

    },
    yAxis: {
      type: 'value',
      min: 88,
      show: true,
      axisLabel: {
        show: true,
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
    series: [{
      // symbol: 'none',//隐藏折点
      symbol: 'circle',
      symbolSize: 1,
      name: '日合格率%',
      data: [],
      type: 'line',
      smooth: true,
      areaStyle: {
        normal: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: "#e2c673"
            }, {
              offset: 1,
              color: "rgba(29, 58, 104,0)"
            }],
            globalCoord: false
          }
        }
      },
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
    }, {
      // symbol: 'none',
      symbol: 'circle',
      symbolSize: 1,
      name: '周合格率%',
      data: [],
      type: 'line',
      smooth: true,
      areaStyle: {
        normal: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: "#690c38"
            }, {
              offset: 1,
              color: "rgba(18, 9, 29,0)"
            }],
            globalCoord: false
          }
        }
      },
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
    }]
  };

  //  图表 左二 车间近7天目标完成情况分析
  @ViewChild('achieveGoalEchart', { static: false }) achieveGoalEchart: ElementRef;
  public achieveGoalTitle = '';
  achieveGoal = {
    color: ['#e8966e', '#a766b6'],
    legend: {
      orient: 'horizontal',
      x: 'right',
      y: 'top',
      data: ['月目标', '月完成'],
      align: 'left',
      icon: 'rect',
      textStyle: {
        color: '#ffffff',
      }
    },
    tooltip: {},
    grid: {
      bottom: '20%',
      height: 90
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
        show: true,
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
        name: '月目标',
        type: 'bar',
        barWidth: 20,
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
        name: '月完成',
        type: 'bar',
        barWidth: 20,
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 10
              }
            }
          }
        },

      }
    ]
  };
  //   图表 左三 车间月目标完成情况分析
  @ViewChild('monthGoalEchart', { static: false }) monthGoalEchart: ElementRef;
  public monthGoalTitle = '';
  monthGoal = {
    color: ['#92a3f1', '#2ed5c3', '#fece60'],
    title: {
      text: '\n\n\n\n第一组\n\n\n\n\n\n第二组',
      textStyle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 10
      }
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      y: 'top',
      data: ['日目标：', '日完成：', '日返工：', '在岗数：', '日目标:', '日完成:', '日返工:', '在岗数:'],
      textStyle: {
        color: '#ffffff',
      },
      align: 'left',
      icon: 'rect',
    },
    tooltip: {},
    xAxis: [
      {
        type: 'category',
        gridIndex: 0,
        data: [],
        axisLabel: {
          show: true,
          interval: 'auto',
          textStyle: {
            color: '#fff',
            fontSize: 10
          }
        },

      },
      {
        type: 'category', gridIndex: 1,
        // data: ['张三', '李四', '王五', '赵六', '曾七'],
        data: [],
        axisLabel: {
          show: true,
          interval: 'auto',
          textStyle: {
            color: '#fff',
            fontSize: 10
          }
        },

      }
    ],
    yAxis: [
      {
        gridIndex: 0,
        axisLabel: {
          show: true,
          interval: 'bottom',
          textStyle: {
            color: '#fff',
            fontSize: 10
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
      {
        gridIndex: 1,
        axisLabel: {
          show: true,
          interval: 'auto',
          textStyle: {
            color: '#fff',
            fontSize: 10
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
    ],
    grid: [
      { bottom: '65%', height: 50 },
      { top: '55%', height: 50 }
    ],
    series: [
      // These series are in the first grid.
      {
        name: '日目标：',
        type: 'bar',
        barWidth: 15,
        seriesLayoutBy: 'row',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 10
              }
            }
          }
        },
      },
      {
        name: '日完成：',
        type: 'bar',
        barWidth: 10,
        seriesLayoutBy: 'row',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 10
              }
            }
          }
        },
      },
      {
        name: '日返工：',
        type: 'bar',
        barWidth: 10,
        seriesLayoutBy: 'row',
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 10
              }
            }
          }
        },
      },
      // These series are in the second grid.
      {
        name: '日目标:',
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 10
              }
            }
          }
        },

      },
      {
        name: '日完成:',
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 10
              }
            }
          }
        },

      },
      {
        name: '日返工:',
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: [],
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
                fontSize: 10
              }
            }
          }
        },

      }
    ]
  };
  // 今日完工Top3
  public dayTop3Title = '';
  public dayTop3 = [
    { des2: '', des3: '' },
    { des2: '', des3: '' },
    { des2: '', des3: '' },
  ];
  // 近7天指标分析
  @ViewChild('ringEchart', { static: false }) ringEchart: ElementRef;
  public ringTitle = '';
  ring = {
    color: ['#5a9bd3', '#fa9161'],
    series: [
      {
        name: "pie_1",
        type: 'pie',
        radius: ['20%', '35%'],
        center: ['15%', '50%'],
        data: [],
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          fontSize: 10,
          lineHeight: 45,
          position: 'center',
          formatter: function (params) { // 默认显示第一个数据
            if (params.dataIndex === 0) {
              return '{p|' + '裁剪完成率' + '}' + '\n{nm|' + params.percent + '%}'
            } else {
              return ''
            }
          },
          rich: {
            p: {
              color: '#ffffff',
              fontSize: 12,
              padding: [0, 0, 180, 0]
            }, nm: {
              color: '#ffffff',
              fontSize: 14,
              padding: [140, 0, 0, 0]

            }
          }
        },
      }, {
        name: "pie_2",
        type: 'pie',
        radius: ['20%', '35%'],
        center: ['40%', '50%'],
        data: [],
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          fontSize: 10,
          lineHeight: 45,
          position: 'center',
          formatter: function (params) { // 默认显示第一个数据
            if (params.dataIndex === 0) {
              return '{p|' + '订单完成率' + '}' + '\n{nm|' + params.percent + '%}'
            } else {
              return ''
            }
          },
          rich: {
            p: {
              color: '#ffffff',
              fontSize: 12,
              padding: [0, 0, 180, 0]
            }, nm: {
              color: '#ffffff',
              fontSize: 14,
              padding: [140, 0, 0, 0]

            }
          }
        },
      }, {
        name: "pie_3",
        type: 'pie',
        radius: ['20%', '35%'],
        center: ['65%', '50%'],
        data: [],
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          fontSize: 10,
          lineHeight: 45,
          position: 'center',
          formatter: function (params) { // 默认显示第一个数据
            if (params.dataIndex === 0) {
              return '{p|' + '质检合格率' + '}' + '\n{nm|' + params.percent + '%}'
            } else {
              return ''
            }
          },
          rich: {
            p: {
              color: '#ffffff',
              fontSize: 12,
              padding: [0, 0, 180, 0]
            }, nm: {
              color: '#ffffff',
              fontSize: 14,
              padding: [140, 0, 0, 0]

            }
          }
        },
      }, {
        name: "pie_4",
        type: 'pie',
        radius: ['20%', '35%'],
        center: ['90%', '50%'],
        data: [],
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          fontSize: 10,
          lineHeight: 45,
          position: 'center',
          formatter: function (params) { // 默认显示第一个数据
            if (params.dataIndex === 0) {
              return '{p|' + '时效达成率' + '}' + '\n{nm|' + params.percent + '%}'
            } else {
              return ''
            }
          },
          rich: {
            p: {
              color: '#ffffff',
              fontSize: 12,
              padding: [0, 0, 180, 0]
            }, nm: {
              color: '#ffffff',
              fontSize: 14,
              padding: [140, 0, 0, 0]
            }
          }
        }
      }]
  };
  // 在制品库存分析
  public repertoryTitle = '';
  public repertory = [
    { des1: '', des2: '', des3: '' },
    { des1: '', des2: '', des3: '' },
    { des1: '', des2: '', des3: '' },
    { des1: '', des2: '', des3: '' },
  ];


  constructor(
    public apiService: ApiService,
    private el: ElementRef,
    private renderer: Renderer2,
    public echartload: EchartsService
  ) { }

  ngOnInit() {
    // 当前时间
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
    // 上次刷新时间
    this.updateTime = new Date().getTime();
    // 日指标监控
    this.fetchDayResulrData();
    //  表格数据  生产进度监控
    this.fetchTableOfProduct();
    // 表格数据 车间生产合格率分析
    this.fetchqualified();
    // 获取图表数据 车间合格率分析
    this.fetchWorkshopQualified();
    // 获取图表数据  车间近7天目标完成情况分析
    this.fetchAchieveGoal();
    // 获取图表数据  车间月目标完成情况分析
    this.fetchMonthGoal();
    // 今日完工Top3
    this.fetchDayTop3();
    // 近7天指标分析 01
    this.fetchRang01();
    // 近7天指标分析 02
    this.fetchRang02();
    // 近7天指标分析 03
    this.fetchRang03();
    // 近7天指标分析 04
    this.fetchRang04();
    // 在制品库存分析
    this.fetchRepertory();
  }

  /** 日指标监控 */
  async fetchDayResulrData() {
    try {
      let result: any = await this.apiService.getData(Cid.PRODUCTION_DAYRESULTDATA, 1, 8);
      // console.log('日指标监控', result);
      this.dayResulrData = result.data;
    } catch (e) {
      console.log(e);
    }
  }
  /** 表格数据  生产进度监控 */
  async fetchTableOfProduct() {
    try {
      let result = await this.apiService.getData(Cid.PRODUCTION_TABLEOFPRODUCT, 1, 8);
      let tempListData = []; // 临时存放数据的 数组
      // console.log('表格数据  生产进度监控', result);
      this.tableOfProductTitle = result.title;
      tempListData = result.data;
      this.tableOfProduct = result.data;
      this.tableOfProduct.push(...tempListData);
    } catch (e) {
      console.log(e);
    }
  }
  /** 表格数据 车间生产合格率分析 */
  async fetchqualified() {
    try {
      let result = await this.apiService.getData(Cid.PRODUCTION_QUALIFIED, 1, 8);
      console.log('表格数据  车间生产合格率分析', result);
      let tempListData = []; // 临时存放数据的 数组
      this.qualifiedTitle = result.title;
      tempListData = result.data;
      this.qualified = result.data;
      this.qualified.push(...tempListData);
    } catch (e) {
      console.log(e);
    }
  }
  /** 获取图表数据 车间合格率分析 */
  async fetchWorkshopQualified() {
    try {
      let result = await this.apiService.getData(Cid.WORDSHOP_QUALIFIED, 1, 8);
      // console.log('获取图表数据 车间合格率分析', result);
      this.workshopTitle = result.title;
      const data = result.data;
      const arr_x: any[] = [];
      const arr_y: any[] = [];
      const echart = echarts.init(this.workShopEchart.nativeElement);
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y.push(item.des2);
      });
      echart.setOption({
        // title: { text: res.title },
        xAxis: [{ data: arr_x }],
        series: [{ data: arr_y }]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 获取图表数据  车间近7天目标完成情况分析 */
  async fetchAchieveGoal() {
    try {
      let result = await this.apiService.getData(Cid.ACHIEVE_GOAL, 1, 8);
      // console.log('获取图表数据 车间近7天目标完成情况分析', result);
      this.achieveGoalTitle = result.title;
      const data = result.data;
      const arr_x = [];
      const arr_y1 = [];
      const arr_y2 = [];
      const echart = echarts.init(this.achieveGoalEchart.nativeElement);
      data.forEach(item => {
        arr_x.push(item.des1);
        arr_y1.push(item.des2);
        arr_y2.push(item.des2);
      });
      echart.setOption({
        // title: { text: res.title },
        xAxis: [{ data: arr_x }],
        series: [{ data: arr_y1 }, { data: arr_y2 }]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);

    }
  }
  /** 获取图表数据  车间月目标完成情况分析 */
  async fetchMonthGoal() {
    try {
      let result = await this.apiService.getData(Cid.MONTH_GOAL, 1, 16);
      // console.log('获取图表数据 车间月目标完成情况分析', result);
      this.monthGoalTitle = result.title;
      const data = result.data;
      const arr_x1 = [];
      const arr_x2 = [];
      const arr_y1_1 = [];
      const arr_y1_2 = [];
      const arr_y1_3 = [];
      const arr_y2_1 = [];
      const arr_y2_2 = [];
      const arr_y2_3 = [];
      const echart = echarts.init(this.monthGoalEchart.nativeElement);
      data.forEach(item => {
        if (item.des1 == '一组') {
          arr_x1.push(item.des2);
          arr_y1_1.push(item.des3);
          arr_y1_2.push(item.des4);
          arr_y1_3.push(item.des5);
        } else {
          arr_x2.push(item.des2);
          arr_y2_1.push(item.des3);
          arr_y2_2.push(item.des4);
          arr_y2_3.push(item.des5);
        }
      });
      echart.setOption({
        xAxis: [{ data: arr_x1 }, { data: arr_x2 }],
        series: [
          {
            name: '日目标：',
            data: arr_y1_1
          },
          {
            name: '日完成：',
            data: arr_y1_2
          },
          {
            name: '日返工：',
            data: arr_y1_3
          },
          {
            name: '日目标:',
            data: arr_y2_1
          },
          {
            name: '日完成:',
            data: arr_y2_2
          },
          {
            name: '日返工:',
            data: arr_y2_3
          },

        ]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);

    }
  }
  /** 今日完工Top3 */
  async fetchDayTop3() {
    try {
      let result: any = await this.apiService.getData(Cid.TOP_THREE, 1, 8);
      // console.log('今日完工Top3', result);
      this.dayTop3Title = result.title;
      this.dayTop3 = result.data;
    } catch (e) {
      console.log(e);
    }
  }
  /** 月指标分析   01 */
  async fetchRang01() {
    try {
      let result = await this.apiService.getData(Cid.MONTH_GOAL_1, 1, 8);
      this.ringTitle = result.title;
      const data = result.data;
      const arr: any[] = [];
      const echart = echarts.init(this.ringEchart.nativeElement);
      data.forEach(item => {
        arr.push({ value: item.des2 });
      });
      echart.setOption({
        series: [{
          name: 'pie_1',
          data: arr
        }]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 月指标分析   02 */
  async fetchRang02() {
    try {
      let result = await this.apiService.getData(Cid.MONTH_GOAL_2, 1, 8);
      this.ringTitle = result.title;
      const data = result.data;
      const arr: any[] = [];
      const echart = echarts.init(this.ringEchart.nativeElement);
      data.forEach(item => {
        arr.push({ value: item.des2 });
      });
      echart.setOption({
        series: [{
          name: 'pie_2',
          data: arr
        }]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 月指标分析   03 */
  async fetchRang03() {
    try {
      let result = await this.apiService.getData(Cid.MONTH_GOAL_3, 1, 8);
      this.ringTitle = result.title;
      const data = result.data;
      const arr: any[] = [];
      const echart = echarts.init(this.ringEchart.nativeElement);
      data.forEach(item => {
        arr.push({ value: item.des2 });
      });
      echart.setOption({
        series: [{
          name: 'pie_3',
          data: arr
        }]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 月指标分析   04 */
  async fetchRang04() {
    try {
      let result = await this.apiService.getData(Cid.MONTH_GOAL_4, 1, 8);
      this.ringTitle = result.title;
      const data = result.data;
      const arr: any[] = [];
      const echart = echarts.init(this.ringEchart.nativeElement);
      data.forEach(item => {
        arr.push({ value: item.des2 });
      });
      echart.setOption({
        series: [{
          name: 'pie_4',
          data: arr
        }]
      });
      echart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }
  /** 在制品库存分析 */
  async fetchRepertory() {
    try {
      let result: any = await this.apiService.getData(Cid.REPERTORY, 1, 8);
      // console.log('在制品库存分析', result);
      this.repertoryTitle = result.title;
      this.repertory = result.data;
    } catch (e) {
      console.log(e);
    }
  }

  /** loading */
  onEchartsLoadService(e) {
    this.echartload.onChartInit(e);
  }

  /**  监听 window.resize 对 整个画面进行缩放 */
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
