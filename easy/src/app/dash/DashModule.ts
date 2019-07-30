import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashOrders } from './dash-orders';
import { DashSales } from './dash-sales';

import { DashService } from './DashService';

@NgModule({
  declarations: [
    DashOrders,
    DashSales,
  ],
  entryComponents: [
    // AppPage1
  ],
  exports: [
    DashOrders,
    DashSales,
  ],
  imports: [
    FormsModule,
  ],
  providers: [
    DashService
  ]
})
export class DashModule { }