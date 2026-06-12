package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
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
