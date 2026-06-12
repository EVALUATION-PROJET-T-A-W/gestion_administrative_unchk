package sn.uchk.universite.service;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Notification;
import sn.uchk.universite.entity.Utilisateur;
import sn.uchk.universite.repository.NotificationRepository;
import sn.uchk.universite.repository.UtilisateurRepository;

import java.util.List;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final UtilisateurRepository utilisateurRepository;

    public NotificationService(
            NotificationRepository notificationRepository,
            UtilisateurRepository utilisateurRepository) {

        this.notificationRepository = notificationRepository;
        this.utilisateurRepository = utilisateurRepository;
    }

    public List<Notification> mesNotifications(
            Authentication authentication) {

        String email = authentication.getName();

        Utilisateur utilisateur =
                utilisateurRepository.findByEmail(email)
                        .orElseThrow();

        return notificationRepository
                .findByUtilisateurId(
                        utilisateur.getId());
    }

    public Notification marquerCommeLue(
            Long id) {

        Notification notification =
                notificationRepository
                        .findById(id)
                        .orElseThrow();

        notification.setEtat("LUE");

        return notificationRepository
                .save(notification);
    }
}
