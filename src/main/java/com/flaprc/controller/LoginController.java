package com.flaprc.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.flaprc.modelo.Usuario;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/login-controller")
public class LoginController {
	
	
	@RequestMapping(method = RequestMethod.POST, consumes= "application/json", path = "/logar")
	public void logar(@RequestBody Usuario usuario) { 
		
		System.out.println("chegou no método logar");
		
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public void logarGet() { 
		
		System.out.println("chegou no método logar");
		
		
	}
	
	@RequestMapping(method = RequestMethod.POST, consumes= "application/json", path = "/logarRetornaUsuario")
	public Usuario logarRetornaUsuario(@RequestBody Usuario usuario) { 
		
		usuario.setLogin("mudou login");
		usuario.setSenha("mudou senha");
		
		return usuario;
		
	}


}