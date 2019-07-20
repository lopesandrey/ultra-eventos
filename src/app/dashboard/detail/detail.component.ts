import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListingService } from 'src/app/core/services/listing.service';
import { map } from 'rxjs/operators';
import { Evento } from 'src/app/shared/event.model';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  evento: Evento;
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private list: ListingService,
    private cart: CheckoutService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) =>{
      this.isLoading = true;

      this.list.detailEvent(parametros.id)
      .toPromise()
      .then((evento: Evento) => {
        this.isLoading = false;
        this.evento = evento;

      });


    });

  }

  additem(evento: Evento) {
    this.cart.includeItem(this.evento);

  }
}
