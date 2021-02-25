import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';

@Component({
  selector: 'app-mes-table',
  templateUrl: './mes-table.component.html',
  styleUrls: ['./mes-table.component.scss']
})
export class MesTableComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) {
    this.getData();
  }

  baseUrl = ' http://112.74.208.251:5419/ross/api/getDataIntf?paramet=';
  params = {
    taxno: '91440116726790339T',
    cid: 62,
    page: 1,
    limit: 5,
    sort: ''
  };

  tempListData: any[] = []; // 临时存放数据的 数组
  listData: any[] = [];

  ngOnInit() {
  }

  /** 生产进度管理 table */
  async getData() {
    try {
      let res = await this.apiServece.getData(Cid.MES_TABLE, 1, 5);
      // console.log('table',res);
      this.tempListData = res.data;
      this.listData = res.data;
      // 将两个数组 合并成一个 用于解决table滚动不连续的问题
      this.listData.push(...this.tempListData);
      // console.log('生产进度管理 table', this.listData);
    } catch (e) {
      console.log(e);
    }


  }

}
