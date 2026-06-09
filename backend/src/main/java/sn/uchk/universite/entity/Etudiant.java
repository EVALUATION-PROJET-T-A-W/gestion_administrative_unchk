package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "etudiant")
@PrimaryKeyJoinColumn(name = "id")
public class Etudiant extends Utilisateur {

    private Long id;
    private String ine;
    private String promotion;
    private LocalDate anneeDebut;
    private LocalDate anneeSortie;

    public Etudiant() {
        setRole(Role.ETUDIANT);
    }
    @ManyToOne
    @JoinColumn(name = "formation_id")
    private Formation formation;
}