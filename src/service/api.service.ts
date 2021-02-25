import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  taxno: string;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(res => {
      this.taxno = res.taxno;
    });
    // console.log('企业纳税人识别号：', this.taxno);
    // window.localStorage.setItem('taxno', this.taxno);
  }
  // 91440116726790339T
  baseUrl = ' http://kb.rossai.cn:5419/ross/api/getDataIntf?paramet='; // 最原始 （全局）

  baseUrl2 = 'http://59.33.34.118:5417/ross/api/getkbdata:POST?paramet='; // 温工 最新使用 的 （局部）

  // baseUrl = ' http://112.74.208.251:5419/ross/api/getDataIntf?paramet='; // 不知道哪里的

  /** 全局通用 方法 */
  getData(cid: number, page: number = 1, limit: number = 8, sort: string = '') {
    let url: string = this.baseUrl;
    // return new Promise<any>((resolve, reject) => this.http.get(url + btoa(JSON.stringify({ 'taxno': this.taxno, 'cid': cid, 'page': page, 'limit': limit, 'sort': sort })))
    return new Promise<any>((resolve, reject) => this.http.get(url + btoa(JSON.stringify({ 'taxno': '91440116726790339T', 'cid': cid, 'page': page, 'limit': limit, 'sort': sort })))
      .subscribe(response =>
        resolve(response),
        error => reject(error)
      )
    );
  }

  /*
   * big 左上角 图  plm-design-center 和 app-month-done
   * 温工 最新使用 的 （局部）
   */
  getData3(cid: number) {
    let url: string = this.baseUrl2;
    // return new Promise<any>((resolve, reject) => this.http.get(url + btoa(JSON.stringify([{ 'taxpayerid': this.taxno, 'cid': cid}])))
    return new Promise<any>((resolve, reject) => this.http.get(url + btoa(JSON.stringify([{ 'taxpayerid': '91442000334746961H', 'cid': cid }])))
      .subscribe(response =>
        resolve(response),
        error => reject(error)
      )
    );
  }


}
