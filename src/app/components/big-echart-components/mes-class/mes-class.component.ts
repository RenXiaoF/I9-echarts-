import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';

@Component({
  selector: 'app-mes-class',
  templateUrl: './mes-class.component.html',
  styleUrls: ['./mes-class.component.scss']
})
export class MesClassComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) {
    this.getData()
  }
  baseUrl = ' http://112.74.208.251:5419/ross/api/getDataIntf?paramet=';
  params = {
    "taxno": '91440116726790339T',
    "cid": 61,
    "page": 1,
    "limit": "6",
    "sort": ""
  }

  info: any[] = [
    { name: '', value1: '', value2: '' },
    { name: '', value1: '', value2: '' },
    { name: '', value1: '', value2: '' },
    { name: '', value1: '', value2: '' },
    { name: '', value1: '', value2: '' },
    { name: '', value1: '', value2: '' }
  ];
  ngOnInit() {
  }
  async getData() {
    try {
      let res = await this.apiServece.getData(Cid.MES_CLASS, 1, 6);
      // console.log('plan', res);
      this.info = res.data;
    } catch (e) {
      console.log(e);
    }

  }

}
