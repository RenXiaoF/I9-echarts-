import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/service/api.service';
import { Cid } from 'src/app/models/cid';
@Component({
  selector: 'app-total-five',
  templateUrl: './total-five.component.html',
  styleUrls: ['./total-five.component.scss']
})
export class TotalFiveComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public apiServece: ApiService
  ) {
    this.getData();
  }
  baseUrl = ' http://112.74.208.251:5419/ross/api/getDataIntf?paramet=';
  params = {
    taxno: '91440116726790339T',
    cid: 53,
    page: 1,
    limit: 5,
    sort: ''
  };

  data = [
    { fno: 0, name: '', value1: 0 },
    { fno: 0, name: '', value1: 0 },
    { fno: 0, name: '', value1: 0 },
    { fno: 0, name: '', value1: 0 },
    { fno: 0, name: '', value1: 0 }
  ];
  ngOnInit() {
  }

  async getData() {
    try {
      let result = await this.apiServece.getData(Cid.TOTAL_FIVE, 1, 5);
      this.data = result.data;
    } catch (e) {
      console.log(e);
    }
  }

}
