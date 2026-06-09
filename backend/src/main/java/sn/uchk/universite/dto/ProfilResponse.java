package sn.uchk.universite.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfilResponse {

    // ===== commun à tous =====
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String photo;
    private String role;

    // ===== étudiant =====
    private String ine;
    private String promotion;
    private String anneeDebut;
    private String anneeSortie;
    private String formationNom;

    // ===== formateur =====
    private String specialite;
    private String grade;
    private String departement;
    private String typeFormateur;

    // ===== administratif =====
    private String service;
    private String fonction;
    private String bureau;
}
