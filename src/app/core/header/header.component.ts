import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { AuthService } from '../services/auth.service';
import { ListingService } from '../services/listing.service';
import { Order } from 'src/app/shared/order.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id: any;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  public getitem(): string {
    return atob(window.localStorage.getItem('Id_user'));
  }
}
