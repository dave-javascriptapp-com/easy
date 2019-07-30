import { Component, Input } from '@angular/core';

@Component({
  selector: 'dash-orders',
  template: `
  <p>
    Orders
  </p>
  `,
  styles: [`
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #777;
  }
  `]
})
export class DashOrders {
  @Input() data: any;

}
