package com.flaprc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.flaprc.repository.FlapRCRepository;

import br.com.flaprc.springboot.Categoria;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/categoria-controller")
public class CategoriaController {
	
	@Autowired
	private FlapRCRepository<Categoria> flapRCRepository;
	
/*	@Autowired
    private DataSource dataSource;*/

	@RequestMapping(method = RequestMethod.POST, consumes= "application/json", path = "/salvarCategoria")
	public Categoria salvarCategoria(@RequestBody Categoria categoria) {
		
		Categoria categoriaSaved = null;
		
		if (categoria != null) {
			
			categoriaSaved = flapRCRepository.save(categoria);
		
		}
		
		return categoriaSaved;
		
	}

}