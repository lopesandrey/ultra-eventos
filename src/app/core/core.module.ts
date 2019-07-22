import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    BrowserModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
