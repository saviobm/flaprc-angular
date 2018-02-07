import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { Usuario } from './Usuario';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioComponent],
  exports: [
    UsuarioComponent    
  ] 
})
export class UsuarioModule { }
