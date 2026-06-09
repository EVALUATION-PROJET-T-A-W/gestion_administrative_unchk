package sn.uchk.universite.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "examen")
public class Examen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String matiere;

    private LocalDate dateExamen;

    private String salle;

    @ManyToOne
    @JoinColumn(name="formation_id")
    private Formation formation;
}
