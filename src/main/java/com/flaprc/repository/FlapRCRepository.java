package com.flaprc.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.flaprc.springboot.FlapRCEntidade;

public interface FlapRCRepository<T extends FlapRCEntidade> extends CrudRepository<T, Long> {

}