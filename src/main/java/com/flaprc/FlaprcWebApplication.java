package com.flaprc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.flaprc.repository")
@EntityScan(value="br.com.flaprc.springboot")
public class FlaprcWebApplication {

	public static void main(String[] args) {
		//SpringApplication.run(EmbeddedServletContainerFactory.class, args);
		//SpringApplication.run(FlapRCRepository.class, args);
		// new SpringApplicationBuilder(FlaprcWebApplication.class).web(false).run(args);
		SpringApplication.run(FlaprcWebApplication.class, args);
	}

}