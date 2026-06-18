package sn.uchk.universite.dto;

import lombok.Data;
import sn.uchk.universite.entity.EmploiDuTemps;
import sn.uchk.universite.entity.Formation;

import java.util.List;

@Data
public class FormateurDashboardDTO {

    private int totalFormations;
    private int totalEmploisDuTemps;
    private int totalEtudiants;
    private int nombreNotifications;

    private List<Formation> formations;
    private List<EmploiDuTemps> emploisDuTemps;
}