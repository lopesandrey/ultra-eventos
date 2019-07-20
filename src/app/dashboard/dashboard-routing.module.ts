import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../login/auth.guard';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [

      { path: '', component: ListingComponent },

    ]
 },
 { path: 'order?idBuyer/:id', component: MyOrdersComponent, canActivate: [AuthGuard] },
 { path: 'detail/:id', component: DetailComponent },
 { path: 'checkout', component: CheckoutComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
