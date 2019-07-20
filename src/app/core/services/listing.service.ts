import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/shared/event.model';
import { URL_API } from './URL_API';
import { map, tap } from 'rxjs/operators';
import { Order } from 'src/app/shared/order.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private http: HttpClient
  ) { }

  eventListin(): Observable<Evento[]> {

    return this.http.get<Evento[]>(`${URL_API}/event`)
      .pipe(
        map(res => {

          return res;
        })
      );
  }

  detailEvent(id: number): Observable<Evento> {

    return this.http.get<Evento>(`${URL_API}/event?id=${id}`)
      .pipe(
        map(res => {

          return res[0];
        })
      );
  }

  orderListin(): Observable<Order[]> {

    return this.http.get<Order[]>(`${URL_API}/order`)
      .pipe(
        map(res => {

          return res;
        })
      );
  }

  myOrders(id: number): Observable<Order[]> {

    return this.http.get<Order[]>(`${URL_API}/order?idBuyer=${id}`)
      .pipe(
        map(res => {
          return res;
        })
      );
  }


}
