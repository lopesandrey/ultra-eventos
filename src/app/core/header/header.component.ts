import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


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
