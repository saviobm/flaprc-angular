import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    LoginModule,
    UsuarioModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
