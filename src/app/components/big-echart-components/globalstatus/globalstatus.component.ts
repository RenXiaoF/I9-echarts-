import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';

@Component({
  selector: 'app-globalstatus',
  templateUrl: './globalstatus.component.html',
  styleUrls: ['./globalstatus.component.scss']
})
export class GlobalstatusComponent implements OnInit {

  echartsInstance: any;

  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) {
    this.getData();
  }

  @ViewChild('mapEchart', { static: false }) mapEchart: ElementRef;
  @ViewChild('pieEchart', { static: false }) pieEchart: ElementRef;
  @ViewChild('areaEchart', { static: false }) areaEchart: ElementRef;
  @ViewChild('tringEchart', { static: false }) tringEchart: ElementRef;
  @ViewChild('bringEchart', { static: false }) bringEchart: ElementRef;

  ringRich = {
    p: {
      color: '#ffffff',
      fontSize: 14,
      padding: [80, 0, 0, 0]
    }, nm: {
      color: '#ffffff',
      fontSize: 18,
      padding: [0, 0, 0, 0]

    }
  };

  // 正中间顶部数据
  dingdanData = {
    cid: 0,
    cusQty: 0,
    fast_order: 0,
    fno: 0,
    fut_danQty: 0,
    fut_jianQty: 0,
    gen_order: 0,
    nea_danQty: 0,
    nea_jianQty: 0,
    soQty: 0,
    sodanQty: 0,
    taxpayerid: "",
    title: ""
  };

  // 中国地图
  mapOption: any = {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      min: 0,
      max: 2500,
      show: false
    },
    dataRange: {
      show: false,
      color: ['#41B179', '#FBD34B', '#21AEFE']
    },
    series: [
      {
        name: '手机',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: {
            areaStyle: {
              color: '#41B179',
            },
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: '#41B179'
          },
          emphasis: {
            areaColor: '#fff'
          }
        },
        data: []
      },
      {
        name: '门店',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: {
            areaStyle: {
              color: '#FBD34B',
            },
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: '#FBD34B'
          },
          emphasis: {
            areaColor: '#fff'
          }
        },
        data: []
      },
      {
        name: 'PC',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: {
            areaStyle: {
              color: '#21AEFE',
            },
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: '#21AEFE'
          },
          emphasis: {
            areaColor: '#fff'
          }
        },
        data: []
      }
    ]
  };
  // 品类排名
  cateList: string[] = [];
  // 商品排名
  productList: any[] = [
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' }
  ];
  // 顾客肖像分析
  faceList: any[] = [
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' }
  ];
  // 用于循环人脸比例图片
  faceBiliLiat: any[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  // 区域排名
  areaList = [
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
  ];
  areaColorList = ['#9ACA74', '#FFD34C', '#40B076', '#40D2C5', '#40BEEE', '#A569B3', '#F2494C', '#F4905E'];
  areaOption = {
    xAxis: {
      interval: 0,
      axisLabel: {
        fontSize: 10,
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: this.areaList.map((item: any) => {
        return item.province;
      })
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    grid: {
      top: 30,
      height: 140
    },
    series: [
      {
        type: 'bar',
        itemStyle: {
          normal: {
            // 自定义渐变色
            color: (params: any) => {
              const colorList = this.areaColorList;
              let index = params.dataIndex;
              if (params.dataIndex >= colorList.length) {
                index = params.dataIndex - colorList.length;
              }
              return colorList[index];
            },
            label: {
              show: true,
              position: 'top', // 在上方显示
              textStyle: {
                color: '#09FEFE',
                fontSize: 10
              }
            }
          },
        },
        data: this.areaList.map((item: any) => {
          return item.value;
        })
      }
    ]
  };
  // 饼图
  pieDataList: any[] = [
    { name: '手机', value: 0 },
    { name: '门店', value: 0 },
    { name: 'PC', value: 0 }
  ];
  pieOption = {
    color: ['#41B179', '#FED24B', '#22ADFE'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      show: false,
      data: this.pieDataList.map((item: any) => {
        return item.name;
      })
    },
    series: [
      {
        name: '全渠道订单额比例',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        itemStyle: {
          normal: {
            label: {
              position: 'inner',
              formatter: (params: any) => {
                return `${params.name}\r\n${(params.percent - 0)}%`;
              },
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            labelLine: {
              show: false
            }
          }
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: this.pieDataList,
      }
    ]
  };


  // 环形图
  tringOption = {
    color: ['#41B179', '#FED24B'],
    series: [{
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['30%', '50%'],
      data: [
        // {
        //   value: 90,
        // }, {
        //   value: 10,

        // },
      ],
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
            return '{p|' + '首单' + '}' + '\n{nm|' + params.percent + '%}'
          } else {
            return ''
          }
        },
        rich: this.ringRich
      },
    }, {
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['70%', '50%'],
      data: [
        // {
        //   value: 85,
        // }, {
        //   value: 15,
        // },
      ],
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
            return '{p|' + '返单' + '}' + '\n{nm|' + params.percent + '%}'
          } else {
            return ''
          }
        },
        rich: this.ringRich

      },
    }]

  };

  bringOption = {
    color: ['#41B179', '#FED24B'],
    series: [{
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['30%', '50%'],
      data: [{
        value: 90,
      }, {
        value: 10,

      },],
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
            return '{p|' + 'FOB' + '}' + '\n{nm|' + params.percent + '%}'
          } else {
            return ''
          }
        },
        rich: this.ringRich

      },
    }, {
      type: 'pie',
      radius: ['40%', '50%'],
      center: ['70%', '50%'],
      data: [{
        value: 85,
      }, {
        value: 15,
      },],
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
            return '{p|' + 'CMT' + '}' + '\n{nm|' + params.percent + '%}'
          } else {
            return ''
          }
        },
        rich: this.ringRich

      },
    }]

  };


  ngOnInit() {
  }

  // 获取数据
  // getData() {
  //   this.http.get('../../../assets/json/globalstatus-data.json').subscribe((res: any) => {
  //     const { dingdanData, mapData, cateList, productList, faceList, areaList, pieDataList } = res.dingdanModule;
  //     // 更新地图
  //     this.http.get('../../../assets/json/china.json').subscribe((mapRes: any) => {
  //       const mapEchart = echarts.init(this.mapEchart.nativeElement);
  //       echarts.registerMap('china', mapRes);
  //       this.mapOption.series[0].data = mapData.dataList1;
  //       this.mapOption.series[1].data = mapData.dataList2;
  //       this.mapOption.series[2].data = mapData.dataList3;
  //       mapEchart.setOption(this.mapOption);
  //     });
  //     // 正中间顶部数据
  //     this.dingdanData = dingdanData;
  //     // 品类排名
  //     this.cateList = cateList;
  //     // 区域排名
  //     const areaEchart = echarts.init(this.areaEchart.nativeElement);
  //     this.areaOption.xAxis.data = areaList.map((item: any) => {
  //       return item.province;
  //     });
  //     this.areaOption.series[0].data = areaList.map((item: any) => {
  //       return item.value;
  //     });
  //     areaEchart.setOption(this.areaOption);
  //     // 饼图
  //     const pieEchart = echarts.init(this.pieEchart.nativeElement);
  //     this.pieOption.legend.data = pieDataList.map((item: any) => {
  //       return item.name;
  //     });
  //     this.pieOption.series[0].data = pieDataList;
  //     pieEchart.setOption(this.pieOption);
  //     // 商品排名
  //     this.productList = productList;
  //     // 顾客画像
  //     this.faceList = faceList;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }








  // 更新数据
  getData() {
    this.getCategory();
    this.getArea();
    this.getOrder();
    this.getMap();
    this.getPie();
    this.getRing();
    this.getStyle();
  }

  /** 品类排名 */
  async getCategory() {
    try {
      let result = await this.apiServece.getData(Cid.PATAMS_RANKCLASS, 1, 6);
      // console.log('品类排名',res);
      let arr = [];
      if (result.data.length) {
        result.data.forEach(item => {
          arr.push(item.name);
        });
      }
      this.cateList = arr;
    } catch (e) {
      console.log(e);
    }
  }

  /** 区域排名 */
  async getArea() {
    try {
      let res = await this.apiServece.getData(Cid.PARAMS_RANKSTYLE, 1, 8);
      // console.log('区域排名', res);
      let data = res.data;
      const areaEchart = echarts.init(this.areaEchart.nativeElement);
      this.areaOption.xAxis.data = data.map((item: any) => {
        return item.name;
      });
      this.areaOption.series[0].data = data.map((item: any) => {
        return item.value1;
      });
      areaEchart.setOption(this.areaOption);
      areaEchart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }

  /** 订单数 */
  async getOrder() {
    try {
      let res = await this.apiServece.getData(Cid.PARAMS_ORDERTOTAL, 1, 34);
      // console.log('订单数', res);
      let data = res.data[0];
      this.dingdanData = data;
    } catch (e) {
      console.log(e);
    }
  }

  /** 地图参数 */
  async getMap() {
    try {
      let res = await this.apiServece.getData(Cid.PATAMS_MAP, 1, 34);
      // console.log('地图参数', res);
      let data = res.data;
      data.forEach(item => {
        item.value = item.value1;
      });
      this.http.get('assets/json/china.json').subscribe((mapRes: any) => {
        const mapEchart = echarts.init(this.mapEchart.nativeElement);
        echarts.registerMap('china', mapRes);
        this.mapOption.series[0].data = data;
        mapEchart.setOption(this.mapOption);
        mapEchart.hideLoading();

      });
    } catch (e) {
      console.log(e);
    }
  }

  /** 右下角小饼图 */
  async getPie() {
    try {
      let res = await this.apiServece.getData(Cid.PARAMS_RANKSALE, 1, 3);
      // console.log('右下角小饼图', res);
      let data = res.data;
      const pieEchart = echarts.init(this.pieEchart.nativeElement);
      this.pieOption.legend.data = data.map((item: any) => {
        return item.name;
      });
      this.pieOption.series[0].data = data.map((item: any) => {
        return item.value1;
      });
      pieEchart.setOption(this.pieOption);
      pieEchart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }

  /**  右下角环形图 */
  async getRing() {
    try {
      let res = await this.apiServece.getData(Cid.PARAMS_RINGINFO, 1, 3);
      // console.log('右下角环形图', res);
      const tringEchart = echarts.init(this.tringEchart.nativeElement);
      const bringEchart = echarts.init(this.bringEchart.nativeElement);

      let data = res.data;
      let arr1 = [];
      let arr2 = [];

      let index = 0;
      data.forEach(item => {
        if (index < 2) {
          arr1.push({ name: item.name, value: item.value1 });
        } else {
          arr2.push({ name: item.name, value: item.value1 });
        }
        index++;
      });

      // console.log(arr1, arr2);


      let top_data = [
        {
          data: [{
            value: arr1[0].value,
          }, {
            value: 100 - arr1[0].value,
          },
          ],
        }, {
          data: [
            {
              value: arr1[1].value,

            },
            {
              value: 100 - arr1[1].value,
            },
          ],
        }]

      let bottom_data = [{
        data: [
          {
            value: arr2[0].value,
          }, {
            value: 100 - arr2[0].value,
          },
        ],
      },
        // {
        //   data: [
        //     {
        //       value: arr2[1].value,

        //     }, {
        //       value: 100 - arr2[1].value,
        //     },
        //   ],
        // }
      ]



      this.tringOption.series[0].data = top_data[0].data
      this.tringOption.series[1].data = top_data[1].data

      this.bringOption.series = bottom_data.map((item: any) => {
        return item;
      });

      tringEchart.setOption(this.tringOption);
      bringEchart.setOption(this.bringOption);
      tringEchart.hideLoading();
      bringEchart.hideLoading();
    } catch (e) {
      console.log(e);
    }
  }

  // 款式排名
  async getStyle() {
    try {
      let res = await this.apiServece.getData(Cid.PARAMS_RANKSTYLE, 1, 8);
      // console.log('款式排名', res);
      let data = res.data;
      data.forEach(item => {
        item.value1 = item.value1 * 100 + '%';
      });
      this.productList = data;
    } catch (e) {
      console.log(e);
    }

  }

  refleshData() {
    this.getData();
  }

  // loading
  onChartInit(ec) {
    this.echartsInstance = ec;
    if (this.echartsInstance) {
      this.echartsInstance.showLoading();
    }
  }
}
