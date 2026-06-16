package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "examen")
@Data
@AllArgsConstructor
@NoArgsConstructor
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
