import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    AlertModule,
    PopoverModule,
    ReactiveFormsModule
  ],
  imports: [
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
  ]
})
export class SharedModule { }
