package sn.uchk.universite.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@Entity
@Table(name = "formateur")
@PrimaryKeyJoinColumn(name = "id")
public class Formateur extends Utilisateur {

    private String specialite;

    private String grade;

    private String departement;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_formateur")
    private TypeFormateur typeFormateur;

    @ManyToMany(mappedBy = "formateurs")
    private List<Formation> formations;

    public Formateur() {
        setRole(Role.FORMATEUR);
    }

    // Getters et Setters


}