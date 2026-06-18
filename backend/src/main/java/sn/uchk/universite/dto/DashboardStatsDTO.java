package sn.uchk.universite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class DashboardStatsDTO {
    private Long nombreEtudiants;
    private Long nombreFormateurs;
    private Long nombreFormations;
    private Long nombreStages;
    private Long nombreReunions;
    private Long nombreDocuments;
}
