package sn.uchk.universite.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
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
    @JoinColumn(name = "formation_id")
    @JsonIgnoreProperties({"formateurs", "emploisDuTemps"})
    private Formation formation;
}
