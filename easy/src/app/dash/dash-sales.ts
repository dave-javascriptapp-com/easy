import { Component, Input } from '@angular/core';
import DashData from './DashData'
import { DashService } from './DashService'

@Component({
  selector: 'dash-sales',
  template: `
  <p>
    Sales
    <button (click)="onButtonRefresh()">Refresh</button>
  </p>
  
  <p class="indent">
    Product Sales: {{data.products}}
  </p>
  
  <p class="indent">
    Services Sales: {{data.services}}
  </p>
  
  <p class="indent">
    Total Sales: {{data.products + data.services}}
  </p>

  `,
  styles: [`
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #777;
  }
  .indent {
    margin-left: 20px;
  }
  `]
})
export class DashSales {
  data = DashData.DashSales;

  constructor (private dashService: DashService) {
  }
  
  onButtonRefresh() {
    console.log("onButtonRefresh");
    this.dashService.getSales();
  }
}
