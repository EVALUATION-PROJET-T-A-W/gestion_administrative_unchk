package sn.uchk.universite.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class EtudiantResponse {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String ine;
    private String promotion;
    private LocalDate anneeDebut;
    private LocalDate anneeSortie;
    private String formationNom;
}
