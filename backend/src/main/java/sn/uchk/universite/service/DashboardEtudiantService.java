package sn.uchk.universite.service;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import sn.uchk.universite.dto.DashboardEtudiantDto;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.*;

@Service
public class DashboardEtudiantService {

    private final NotificationRepository notificationRepository;
    private final RapportRepository rapportRepository;
    private final StageRepository stageRepository;
    private final PartenaireRepository partenaireRepository;
    private final EmploiDuTempsRepository emploiDuTempsRepository;
    private final EtudiantRepository etudiantRepository;

    public DashboardEtudiantService(
            NotificationRepository notificationRepository,
            RapportRepository rapportRepository,
            StageRepository stageRepository,
            PartenaireRepository partenaireRepository,
            EmploiDuTempsRepository emploiDuTempsRepository,
            EtudiantRepository etudiantRepository) {

        this.notificationRepository = notificationRepository;
        this.rapportRepository = rapportRepository;
        this.stageRepository = stageRepository;
        this.partenaireRepository = partenaireRepository;
        this.emploiDuTempsRepository = emploiDuTempsRepository;
        this.etudiantRepository = etudiantRepository;
    }

    public DashboardEtudiantDto dashboard(
            Authentication authentication) {

        String email = authentication.getName();

        Etudiant etudiant =
                etudiantRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Étudiant introuvable"));

        DashboardEtudiantDto dto =
                new DashboardEtudiantDto();

        dto.setNom(etudiant.getNom());
        dto.setPrenom(etudiant.getPrenom());
        dto.setPhoto(etudiant.getPhoto());

        dto.setFormation(

        etudiant.getFormation().getNomFormation());

        dto.setNombreNotifications(
                notificationRepository.count());

        dto.setNombreRapports(
                rapportRepository.count());

        dto.setNombreStages(
                stageRepository.count());

        dto.setNombrePartenaires(
                partenaireRepository.count());

        dto.setNombreCours(
                emploiDuTempsRepository.count());

        return dto;
    }
}