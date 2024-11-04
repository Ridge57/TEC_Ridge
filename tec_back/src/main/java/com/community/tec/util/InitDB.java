package com.community.tec.util;

import com.community.tec.entity.Categorie;
import com.community.tec.entity.User;
import com.community.tec.service.CategorieService;
import com.community.tec.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class InitDB {
    UserService userService;
    CategorieService categorieService;

    public InitDB(UserService userService, CategorieService categorieService) {
        this.categorieService=categorieService;
        this.userService=userService;
        //initilization();
    }

    public void initilization() {

        categorieService.deleteAll();
        categorieService.save(Categorie.builder().nom("Vêtements").build());
        categorieService.save(Categorie.builder().nom("Emplois").build());
        categorieService.save(Categorie.builder().nom("Electromenager").build());
        categorieService.save(Categorie.builder().nom("Ameublement").build());
        categorieService.save(Categorie.builder().nom("Voitures").build());
        categorieService.save(Categorie.builder().nom("Livres").build());
        categorieService.save(Categorie.builder().nom("Ordinateurs").build());
        categorieService.save(Categorie.builder().nom("Voyages").build());

        List<User> users = userService.findAll();
        List<Categorie> categories = categorieService.findAll();

        for (User user : users) {
            System.out.println("Created USER : "+user.getId()+" "+user.getNom()+" "+user.getPrenom());
        }

        for(Categorie categorie : categories) {
            System.out.println("Created Categorie : "+categorie.getId()+categorie.getNom());
        }
    }
}
