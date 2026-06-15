package sn.uchk.universite.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class StageRequest {

    private String entreprise;

    private LocalDate dateDebut;

    private LocalDate dateFin;

    private String bilan;

    private String statut;

    private Long etudiantId;
}
