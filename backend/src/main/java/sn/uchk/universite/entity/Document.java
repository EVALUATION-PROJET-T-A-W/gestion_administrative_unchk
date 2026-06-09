package sn.uchk.universite.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "document")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String typeDocument;

    private String fichier;

    private LocalDate datePublication;

    private String description;

    @ManyToOne
    @JoinColumn(name="administratif_id")
    private Administratif administratif;
}
