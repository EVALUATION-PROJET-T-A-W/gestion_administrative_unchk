package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "partenaire")
public class Partenaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String typePartenaire;

    private String domaine;

    private String email;

    private String telephone;

    private String adresse;

    private String pays;

    private Boolean actif = true;

    @Column(columnDefinition = "TEXT")
    private String description;

    private LocalDateTime dateCreation = LocalDateTime.now();
}