import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    AlertModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
