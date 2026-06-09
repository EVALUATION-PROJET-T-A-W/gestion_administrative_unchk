package sn.uchk.universite.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "reunion")
public class Reunion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String typeReunion;

    private LocalDate dateReunion;

    private String compteRendu;

    @ManyToOne
    @JoinColumn(name="formation_id")
    private Formation formation;
}
