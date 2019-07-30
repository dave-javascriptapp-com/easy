import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import AppData from '../AppData';
import DashData from './DashData';

@Injectable()
export class DashService {
  constructor(private http: HttpClient) {
  }

  getSales() {
    console.log("getSales");
    var url = '/getSales';
    var params = {
      'user': '101',
    };
    var headers = new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    if (AppData.ServerConfig.local) {
      this.http.get("/assets/api"+url+".json").subscribe((data:any) => {
        console.log("GET getSales - data:", data);
        this.parseSales(data);
      });
    } else {
      this.http.post(url, this.serialize(params), {headers: headers } ).subscribe((data:any) => {
        console.log("POST getSales - data:", data);
        this.parseSales(data);
      });
    }
  }

  parseSales(data: any) {
    // data model                     service json
    DashData.DashSales.products = data.sales.products;
    DashData.DashSales.services = data.sales.services;
  }

  public serialize(object: any): string {
    let str = "";
    for (let key in object) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(object[key]);
    }
    return str;
  }

}
