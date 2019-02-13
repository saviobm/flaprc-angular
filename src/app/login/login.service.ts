import { Injectable, NgModule } from '@angular/core';
import { Usuario } from '../usuario/Usuario';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { FlapRCEntidade } from '../modelo/FlapRCEntidade';
import * as sweetalert2 from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LoginService {
  
  private apiUrl = 'http://localhost:8080/login-controller';

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
      
  constructor(private http: Http, private translate: TranslateService) { 
   
    translate.setDefaultLang('pt-BR');           

  }
  
  logar(usuario: Usuario): void {

    console.log("Usuario.login --> " + usuario.login);
    console.log("Usuario.senha --> " + usuario.senha);
    

    //let body = JSON.stringify({ "login": "asdasd", "senha": "12312312" });

    /*return this.http.post(this.apiUrl + "/logar", usuario, this.options)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));*/
      
      this.http.post(this.apiUrl + "/logar", usuario, this.options).toPromise()
        .then(this.extractData).catch(this.handleErrorPromise);

  }

  extractData(res: Response) {
    //let body = res.json();
    //return body || {};
    
    //let usuario: any = JSON.parse(res.json());

    //console.log(usuario.login);
    //console.log(usuario.senha);    

    let usuario: Usuario = res.json() as Usuario;

    console.log(usuario.login);
    console.log(usuario.senha);

  }

  handleErrorPromise (error: Response | any) {    

    if (error != null) { 

      let objetoError: FlapRCEntidade = error.json() as FlapRCEntidade;
      let chaveMensagem: string = objetoError.keyMessageError as string;
      let mensagemInterpolada: string =  "{{ \'" + chaveMensagem + "\' }}";
      console.log(objetoError.keyMessageError);
      

      /*const swal = require('sweetalert2');

      swal({
        title: 'Error!',
        text: mensagemInterpolada,
        type: 'error',
        confirmButtonText: 'OK'
      });*/

    }
 
    //return Promise.reject(error);

  } 

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
