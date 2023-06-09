package com.example.india;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
//@CrossOrigin(origins = "*")
public class SpringDataJpaIndiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringDataJpaIndiaApplication.class, args);
	}

}
