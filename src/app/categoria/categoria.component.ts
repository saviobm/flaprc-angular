import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from '../modelo/Categoria';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [ CategoriaService ]
})
export class CategoriaComponent implements OnInit {

  aba: string = 'home';

  texto: string = "abc";

  //categoria: Categoria;

  categoria: any = {
    descricao: "Desc Inicial",
    ativo: false
  }

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

  }

  salvarCategoria(): void {

    this.categoriaService.salvarCategoria(this.categoria);

  }

}
