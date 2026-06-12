package sn.uchk.universite.service;

import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.*;
import sn.uchk.universite.repository.*;

import java.time.LocalDate;
import java.util.List;

@Service
public class RapportService {

    private final RapportRepository rapportRepository;
    private final ReunionRepository reunionRepository;
    private final UtilisateurRepository utilisateurRepository;
    private final NotificationRepository notificationRepository;

    public RapportService(
            RapportRepository rapportRepository,
            ReunionRepository reunionRepository,
            UtilisateurRepository utilisateurRepository,
            NotificationRepository notificationRepository) {

        this.rapportRepository = rapportRepository;
        this.reunionRepository = reunionRepository;
        this.utilisateurRepository = utilisateurRepository;
        this.notificationRepository = notificationRepository;
    }

    public Rapport publier(Rapport rapport, Long reunionId) {

        Reunion reunion = reunionRepository.findById(reunionId)
                .orElseThrow(() ->
                        new RuntimeException("Réunion introuvable"));

        rapport.setReunion(reunion);
        rapport.setDateGeneration(LocalDate.now());

        Rapport savedRapport = rapportRepository.save(rapport);

        List<Utilisateur> utilisateurs =
                utilisateurRepository.findAll();

        for (Utilisateur utilisateur : utilisateurs) {

            Notification notification = new Notification();

            notification.setMessage(
                    "Nouveau compte rendu publié : "
                            + savedRapport.getTitre());

            notification.setDateNotification(
                    LocalDate.now());

            notification.setEtat("NON_LUE");

            notification.setUtilisateur(utilisateur);

            notificationRepository.save(notification);
        }

        return savedRapport;
    }

    public List<Rapport> lister() {
        return rapportRepository.findAll();
    }

    public Rapport afficher(Long id) {
        return rapportRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Rapport introuvable"));
    }

    public List<Rapport> parReunion(Long reunionId) {
        return rapportRepository.findByReunionId(reunionId);
    }
}