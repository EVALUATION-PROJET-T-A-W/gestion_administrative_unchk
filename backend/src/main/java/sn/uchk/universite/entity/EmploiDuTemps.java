package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Setter
@Getter
@Entity
@Table(name = "emploi_du_temps")
public class EmploiDuTemps {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String jour;

    private LocalTime heureDebut;

    private LocalTime heureFin;

    private String salle;

    private String module;

    @ManyToOne
    @JoinColumn(name="formation_id")
    private Formation formation;
}
