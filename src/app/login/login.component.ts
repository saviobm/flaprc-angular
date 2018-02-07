import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Usuario } from '../usuario/Usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  usuario: Usuario;

  constructor(private loginService: LoginService) {
    this.usuario = new Usuario("", "");
   }

  ngOnInit() {
  }

  logar($event): void {
    console.log("Login --> " + this.usuario.login);
    console.log("Senha --> " + this.usuario.senha);

    this.loginService.logar(this.usuario);
  }

}