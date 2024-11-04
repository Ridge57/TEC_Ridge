package com.community.tec.service;

import com.community.tec.dao.CategorieDAO;
import com.community.tec.entity.Categorie;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieServiceImpl implements CategorieService {

    private final CategorieDAO categorieDao;

    CategorieServiceImpl(CategorieDAO categorieDAO) {
        this.categorieDao = categorieDAO;
    }
    @Override
    public void save(Categorie categorie) {
        categorieDao.save(categorie);
    }

    @Override
    public List<Categorie> findAll() {
        return categorieDao.findAll();
    }

    @Override
    public void deleteAll() {
        categorieDao.deleteAll();
    }
}
