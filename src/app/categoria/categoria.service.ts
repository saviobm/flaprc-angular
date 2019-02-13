import { Injectable } from '@angular/core';
import { Categoria } from '../modelo/Categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestOptions, Headers, Http, Response } from '@angular/http';

@Injectable()
export class CategoriaService {

  private headersAntigo = new Headers({ 'Content-Type': 'application/json' });
  private optionsAntigo = new RequestOptions({ headers: this.headersAntigo });

  private headers = new HttpHeaders().set( 'Content-Type', 'application/json');

  url = 'http://localhost:8080/categoria-controller';

  constructor(private http: Http) { }

  salvarCategoria(categoria: Categoria): void {
    this.http.post(this.url + '/salvar', categoria, this.optionsAntigo)
        .toPromise().then(this.retornoSucesso).catch(this.retornoErro);
  }

  retornoSucesso(response: Response): void {
    const categoria: Categoria = response.json() as Categoria;
    console.log(categoria.id);
  }

  retornoErro(error: Response | any): void {
    console.log(error);
  }

}
