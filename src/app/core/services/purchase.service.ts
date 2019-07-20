import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/shared/order.model';
import { Observable } from 'rxjs';
import { URL_API } from './URL_API';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(
    private http: HttpClient
  ) { }

  public purchase(order: Order): Observable<number>{

    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    let options = {
      headers
  }

    return this.http.post(`${URL_API}/order`, order, options).pipe(
      map((res: any) => res.id)
    )
  }
}
