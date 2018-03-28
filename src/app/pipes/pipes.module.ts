import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule    
  ],
  exports: [
    PipesComponent
  ],
  declarations: [
    PipesComponent
  ]
})
export class PipesModule { }
