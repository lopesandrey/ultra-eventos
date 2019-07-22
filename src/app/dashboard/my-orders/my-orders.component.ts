import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListingService } from 'src/app/core/services/listing.service';
import { Order } from 'src/app/shared/order.model';
import { OrderItem } from 'src/app/shared/item-checkout.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders: Order[];
  items: OrderItem[];
  constructor(
    private route: ActivatedRoute,
    private list: ListingService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {


      this.list.myOrders(parametros.id)
      .toPromise()
      .then((orders: Order[]) => {

        this.orders = orders;

      });


    });



  }

}
