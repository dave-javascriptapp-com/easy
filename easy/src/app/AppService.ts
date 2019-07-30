import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import AppData from './AppData';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getUser() {
    console.log("getUser");
    var url = '/getUser';
    var params = {
      'user': '101',
    };
    var headers = new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    if (AppData.ServerConfig.local) {
      this.http.get("/assets/api"+url+".json").subscribe((data:any) => {
        console.log("GET getUser - data:", data);
        this.parseUser(data);
      });
    } else {
      this.http.post(url, this.serialize(params), {headers: headers } ).subscribe((data:any) => {
        console.log("POST getUser - data:", data);
        this.parseUser(data);
      });
    }
  }

  parseUser(data: any) {
    var AppMain = AppData.AppMain;

    AppMain.welcome.name = data.user.name;
    AppMain.welcome.city = data.user.city;
  }

  getNumbers() {
    console.log("getNumbers");
    var url = '/getNumbers';
    var params = {
      'user': '101',
    };
    var headers = new HttpHeaders({ 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    if (AppData.ServerConfig.local) {
      this.http.get("/assets/api"+url+".json").subscribe((data:any) => {
        console.log("GET getNumbers - data:", data);
        this.parseNumbers(data);
      });
    } else {
      this.http.post(url, this.serialize(params), {headers: headers } ).subscribe((data:any) => {
        console.log("POST getNumbers - data:", data);
        this.parseNumbers(data);
      });
    }
  }

  parseNumbers(data: any) {
    var items = AppData.AppMain.total;  // data model - destination
    var numbers = data.numbers;         // server     - source

//    items = data.numbers;
    items.length = 0;
    for(var i=0;i<numbers.length;++i) {
      items.push(numbers[i]);
    }

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
