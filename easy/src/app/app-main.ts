import { Component } from '@angular/core';
import AppData from './AppData'
import DashData from './dash/DashData'
import { AppService } from './AppService';

@Component({
  selector: 'app-main',
  template: `
  <app-header [data]="data.header"></app-header>

  <hr>
  <app-show-code [data]="data.welcome" [code]="data.welcomeCode"></app-show-code>
  <app-welcome [data]="data.welcome"></app-welcome>

  <hr>
  <app-show-code [data]="data.total" [code]="data.totalCode"></app-show-code>
  <app-total [data]="data.total"></app-total>
  
  <hr>
  <app-show-code [data]="dashSales" [code]="data.dashSalesCode"></app-show-code>
  <dash-sales></dash-sales>
  
  <hr>
  <app-user-form [data]="data.userForm"></app-user-form>
  <hr>

  `,
  styles: [ `
  p {
    font-family: Arial, Helvetica, sans-serif;
  }
  ` ]
})
export class AppMain  {
  data = AppData.AppMain;
  dashSales = DashData.DashSales;

  constructor(private appService: AppService){
  }

  ngOnInit() {
    this.appService.getUser();
    this.appService.getNumbers();
  }

}
