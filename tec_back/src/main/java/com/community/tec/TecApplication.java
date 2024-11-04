package com.community.tec;

import com.community.tec.entity.Categorie;
import com.community.tec.entity.User;
import com.community.tec.service.CategorieService;
import com.community.tec.service.UserService;
import com.community.tec.util.InitDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class TecApplication {

	public static void main(String[] args) {
		SpringApplication.run(TecApplication.class, args);
	}
}
