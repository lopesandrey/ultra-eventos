import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    DashboardRoutingModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
