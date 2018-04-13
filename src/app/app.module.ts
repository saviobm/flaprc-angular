import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from './funcoes/HttpLoaderFactory';
import { LoginService } from './login/login.service';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { ManterCategoriaComponent } from './manter-categoria/manter-categoria.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ManterCategoriaComponent  
  ],  
  imports: [    
    FormsModule,
    CommonModule,
    BrowserModule,
    LoginModule,
    UsuarioModule,
    HttpModule,
    HttpClientModule,    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],  
  bootstrap: [AppComponent]  
})
export class AppModule { }
