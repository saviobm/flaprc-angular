import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { UsuarioModule } from '../usuario/usuario.module';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    UsuarioModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService
  ]
})
export class LoginModule { 

}