package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
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