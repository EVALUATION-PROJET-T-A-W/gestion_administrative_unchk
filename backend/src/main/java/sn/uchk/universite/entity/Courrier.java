package sn.uchk.universite.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "courrier")
public class Courrier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String typeCourrier;

    private String objet;

    private LocalDate dateEnvoi;

    private String expediteur;

    private String destinataire;

    @ManyToOne
    @JoinColumn(name="administratif_id")
    private Administratif administratif;
}
