import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    CoreModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
