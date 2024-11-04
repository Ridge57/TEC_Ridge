package com.community.tec.service;

import com.community.tec.entity.Categorie;

import java.util.List;

public interface CategorieService {
    void save(Categorie categorie);
    List<Categorie> findAll();

    void deleteAll();
}
