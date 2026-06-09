package sn.uchk.universite.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "cours")
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String description;

    private LocalDate dateCours;

    private String supportCours;

    @ManyToOne
    @JoinColumn(name="formation_id")
    private Formation formation;
}
