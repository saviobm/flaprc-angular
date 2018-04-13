import { Injectable } from '@angular/core';
import { Categoria } from '../modelo/Categoria';
import { Http } from '@angular/http';

@Injectable()
export class CategoriaService {

  url: string = "http://localhost:8080/categoria-controller";

  constructor(private http: Http) { }

  salvarCategoria(categoria: Categoria) {

    this.http.put(this.url + "salvarCategoria", categoria);

  }

}
