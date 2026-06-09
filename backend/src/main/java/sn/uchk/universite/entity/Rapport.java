package sn.uchk.universite.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "rapport")
public class Rapport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String typeRapport;

    private LocalDate dateGeneration;

    private String format;

    @ManyToOne
    @JoinColumn(name="reunion_id")
    private Reunion reunion;
}