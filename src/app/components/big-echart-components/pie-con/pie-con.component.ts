import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';

@Component({
  selector: 'app-pie-con',
  templateUrl: './pie-con.component.html',
  styleUrls: ['./pie-con.component.scss']
})
export class PieConComponent implements OnInit {
  echartsInstance: any;

  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) {
    this.getData();
   }
  @ViewChild('pieEchart', { static: false }) pieEchart: ElementRef;

  baseUrl = ' http://112.74.208.251:5419/ross/api/getDataIntf?paramet=';
  params = {
    taxno: '91440116726790339T',
    cid: 52,
    page: 1,
    limit: 5,
    sort: ''
  };

  option = {
    color: ['#06a7ef', '#f69b29', '#994579', '#2dad6d', '#f14a49'],
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
  ngOnInit() {
  }

 async getData(){
    try {
      let result = await this.apiServece.getData(Cid.PIE_CON, 1, 5);
      const data  = result.data;
      const arr: any[] = [];
      const echart = echarts.init(this.pieEchart.nativeElement);
      data.forEach(item => {
        arr.push({name: item.name, value: item.value1});
      });
      this.option.series[0].data = arr;
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
