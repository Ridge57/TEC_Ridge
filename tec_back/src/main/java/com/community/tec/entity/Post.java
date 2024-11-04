package com.community.tec.entity;

import com.community.tec.util.PostType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.UUID;

/**
 * Represente une post : offre ou besoin
 */
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column
    private String titre;

    @Column
    private String description;

    @Column
    private PostType type;

    @Column
    private UUID owner;

    @ManyToOne
    private Categorie categorie;

    @Column
    private Date datePublication;

}
