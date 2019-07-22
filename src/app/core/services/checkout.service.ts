import { Injectable } from '@angular/core';
import { OrderItem } from 'src/app/shared/item-checkout.model';
import { Evento } from 'src/app/shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  public items: OrderItem[] = [];
  total;

  public showitems(): OrderItem[] {
    return this.items;
  }

  public includeItem(evento: Evento) {
    const itemCart: OrderItem = new OrderItem(
      evento.id,
      evento.img,
      evento.title,
      evento.description,
      evento.price,
      1
    );

    const itemEncontrado = this.items.find((item: OrderItem) => item.id === itemCart.id);

    if (itemEncontrado) {
            itemEncontrado.qtd += 1;
        } else {
          this.items.push(itemCart);
        }
  }

  public totalCompras(): number {
    let total = 0;

    this.items.map((itemtotal: OrderItem) => {
        total = total + (itemtotal.price * itemtotal.qtd);
    });

    return  total;
  }

  public adicionarCar(item: OrderItem) {
    const itemEncontrado = this.items.find((itemf: OrderItem) => itemf.id === item.id);

    if (itemEncontrado) {
      itemEncontrado.qtd += 1;
    }
  }

  public diminuirCar(item: OrderItem) {
    const itemEncontrado = this.items.find((itemf: OrderItem) => itemf.id === item.id);

    if (itemEncontrado) {
      itemEncontrado.qtd -= 1;
    }
    if (itemEncontrado.qtd === 0) {
      this.items.splice(this.items.indexOf(itemEncontrado), 1);
    }
  }

  public excluir(item: OrderItem){
    const itemEncontrado = this.items.find((itemf: OrderItem) => itemf.id === item.id);
    this.items.splice(this.items.indexOf(itemEncontrado), 1);
  }

  public cleanCart(){
    this.items = []
  }
}
