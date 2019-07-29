import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { PurchaseService } from 'src/app/core/services/purchase.service';
import { Order } from 'src/app/shared/order.model';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import { OrderItem } from 'src/app/shared/item-checkout.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup;
  idOrder: number;
  idUser = window.localStorage.getItem('Id_user');
  item: OrderItem[] = [];
  isAuthneticated;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private purchase: PurchaseService,
    public cart: CheckoutService
  ) { }

  ngOnInit() {
    this.createForm();
    this.item = this.cart.showitems();
    this.authService.isAuthneticated.subscribe((res: boolean) => this.isAuthneticated = res)

  }

  createForm(): void {
    this.form = this.formBuilder.group({
      numberCard: ['', [Validators.required, Validators.minLength(16), ]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      cod: ['', [Validators.required, Validators.minLength(3)]],
      dateExp: ['', [Validators.required]],
      formPay: ['', [Validators.required]]
    });
  }



  public onSubmit(): void {
    if (this.form.status === 'INVALID') {
      this.form.get('numberCard').markAsTouched();
      this.form.get('name').markAsTouched();
      this.form.get('cod').markAsTouched();
      this.form.get('dateExp').markAsTouched();
      this.form.get('formPay').markAsTouched();

    } else {
      if (this.cart.showitems().length === 0) {
        alert('Você não selecionou nenhum item!');
      } else {
        let created = new Date();
        const order: Order = new Order(
          JSON.parse(atob(this.idUser)),
          this.form.value.numberCard,
          this.form.value.name,
          this.form.value.cod,
          this.form.value.dateExp,
          this.form.value.formPay,
          this.cart.showitems(),
          this.cart.totalCompras(),
          created
        );

        this.purchase.purchase(order)
        .subscribe((idOrder: number) => {
          this.idOrder = idOrder;
          this.cart.cleanCart();
        });
      }


    }
  }

  /* public getToken(): string {
    return window.localStorage.getItem('AUTH_TOKEN');
  } */

  public adicionar(item: OrderItem) {
    this.cart.adicionarCar(item);
  }

  public diminuir(item: OrderItem) {
    this.cart.diminuirCar(item);
  }

  public excluir(item: OrderItem) {
    this.cart.excluir(item);
  }
}
