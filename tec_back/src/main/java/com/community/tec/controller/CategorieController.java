package com.community.tec.controller;

import com.community.tec.entity.Categorie;
import com.community.tec.service.CategorieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {

    CategorieService categorieService;

    CategorieController(CategorieService categorieService) {
        this.categorieService = categorieService;
    }

    @RequestMapping(value = "/categories", method = RequestMethod.GET)
    public List<Categorie> findAll() {
        return categorieService.findAll();
    }

    @RequestMapping(value = "/categorie", method = RequestMethod.POST)
    public void save(@RequestBody Categorie categorie) {
        categorieService.save(categorie);
    }
}
