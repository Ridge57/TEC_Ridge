package com.community.tec.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String dateNaissance;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    private String pays;

    @Column(nullable = false)
    private String telephone;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    @Column
    private Set<UUID> postsFavoris;

}
