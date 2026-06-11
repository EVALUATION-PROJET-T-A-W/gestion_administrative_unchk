package sn.uchk.universite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Setter
@Getter
@Data
public class EmploiDuTempsRequest {

    private String jour;

    private LocalTime heureDebut;

    private LocalTime heureFin;

    private String salle;

    private String module;

    private Long formationId;
}