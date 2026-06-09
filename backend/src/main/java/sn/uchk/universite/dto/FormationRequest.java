package sn.uchk.universite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
public class FormationRequest {
    private String nomFormation;
    private String typeFormation;
    private String niveau;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private Double montant;
    private String typeFinancement;
    private Integer nombreHomme;
    private Integer nombreFemme;
    private String description;
}
