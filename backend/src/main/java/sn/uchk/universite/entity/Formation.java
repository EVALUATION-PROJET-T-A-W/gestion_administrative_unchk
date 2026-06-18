package sn.uchk.universite.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "formation")
public class Formation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomFormation;
    private String typeFormation;
    private String niveau;

    private LocalDate dateDebut;
    private LocalDate dateFin;

    private Double montant;
    private String typeFinancement;

    private Integer nombreHomme;
    private Integer nombreFemme;

    private String description;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "formation_formateur",
            joinColumns = @JoinColumn(name = "formation_id"),
            inverseJoinColumns = @JoinColumn(name = "formateur_id")
    )
    private List<Formateur> formateurs;

    @JsonIgnore
    @OneToMany(mappedBy = "formation")
    private List<EmploiDuTemps> emploisDuTemps;
}