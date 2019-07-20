import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    DashboardRoutingModule,
  ],
  declarations: [HomeComponent, ListingComponent, DetailComponent, CheckoutComponent, SuccessComponent, MyOrdersComponent  ]
})
export class DashboardModule { }
