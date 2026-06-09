package sn.uchk.universite.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "budget")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer annee;

    private Double montantPrevu;

    private Double montantRealise;

    private String noteOrientation;

    @ManyToOne
    @JoinColumn(name="administratif_id")
    private Administratif administratif;
}