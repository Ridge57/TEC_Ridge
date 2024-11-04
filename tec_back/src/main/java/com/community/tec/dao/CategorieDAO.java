package com.community.tec.dao;

import com.community.tec.entity.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CategorieDAO extends JpaRepository<Categorie, UUID> {
}
