package sn.uchk.universite.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CoursRequest {

    private String titre;

    private String description;

    private LocalDate dateCours;

    private String supportCours;

    private Long formationId;

}
