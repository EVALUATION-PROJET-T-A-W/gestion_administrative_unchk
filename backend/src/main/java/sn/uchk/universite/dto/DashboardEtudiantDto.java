package sn.uchk.universite.dto;

import lombok.Data;

@Data
public class DashboardEtudiantDto {

    private String nom;

    private String prenom;

    private String photo;

    private String formation;

    private long nombreNotifications;

    private long nombreCirculaires;

    private long nombreRapports;

    private long nombreStages;

    private long nombrePartenaires;

    private long nombreCours;
}