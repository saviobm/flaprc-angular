package com.flaprc.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.flaprc.springboot.Categoria;

public interface FlapRCRepository extends CrudRepository<Categoria, Long> {

}
