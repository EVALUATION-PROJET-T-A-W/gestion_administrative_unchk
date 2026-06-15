package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "stage")
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String entreprise;

    private LocalDate dateDebut;

    private LocalDate dateFin;

    private String bilan;

    private String statut;

    @ManyToOne
    @JoinColumn(name="etudiant_id")
    private Etudiant etudiant;
}
