package sn.uchk.universite.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "evaluation")
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String typeEvaluation;

    private LocalDate dateEvaluation;

    private Double note;

    private Integer coefficient;

    @ManyToOne
    @JoinColumn(name="cours_id")
    private Cours cours;
}
