package sn.uchk.universite.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import sn.uchk.universite.dto.ProfilResponse;
import sn.uchk.universite.entity.*;
import sn.uchk.universite.repository.EmploiDuTempsRepository;
import sn.uchk.universite.repository.UtilisateurRepository;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.List;

@Service

public class ProfilService {

    private final UtilisateurRepository utilisateurRepository;
    private final UploadService uploadService;
    private final EmploiDuTempsRepository emploiDuTempsRepository;
    public ProfilService(
            UtilisateurRepository utilisateurRepository,
            UploadService uploadService, EmploiDuTempsRepository emploiDuTempsRepository) {

        this.utilisateurRepository = utilisateurRepository;
        this.uploadService = uploadService;
        this.emploiDuTempsRepository = emploiDuTempsRepository;
    }



    public ProfilResponse getMyProfile() {

        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        String email = auth.getName();

        Utilisateur user = utilisateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));

        ProfilResponse dto = new ProfilResponse();

        dto.setId(user.getId());
        dto.setNom(user.getNom());
        dto.setPrenom(user.getPrenom());
        dto.setEmail(user.getEmail());
        dto.setTelephone(user.getTelephone());
        dto.setPhoto(user.getPhoto());
        dto.setRole(user.getRole().name());

        // ===== ETUDIANT =====
        if (user instanceof Etudiant etu) {
            dto.setIne(etu.getIne());
            dto.setPromotion(etu.getPromotion());
            dto.setAnneeDebut(
                    etu.getAnneeDebut() != null ? etu.getAnneeDebut().toString() : null
            );
            dto.setAnneeSortie(
                    etu.getAnneeSortie() != null ? etu.getAnneeSortie().toString() : null
            );
        }

        // ===== FORMATEUR =====
        if (user instanceof Formateur f) {
            dto.setSpecialite(f.getSpecialite());
            dto.setGrade(f.getGrade());
        }

        // ===== ADMIN =====
        if (user instanceof Administratif a) {
            dto.setService(a.getService());
            dto.setFonction(a.getFonction());
        }

        return dto;
    }

    public ProfilResponse modifierMonProfil(
            String telephone,
            MultipartFile photo) {

        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        String email = auth.getName();

        Utilisateur utilisateur =
                utilisateurRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("Utilisateur introuvable"));

        utilisateur.setTelephone(telephone);

        if (photo != null && !photo.isEmpty()) {

            String photoName =
                    uploadService.uploadPhoto(photo);

            utilisateur.setPhoto(photoName);
        }

        utilisateurRepository.save(utilisateur);

        return getMyProfile();
    }

    public List<Formation> mesFormations() {

        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        String email = auth.getName();

        Utilisateur utilisateur = utilisateurRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Utilisateur introuvable"));

        if (utilisateur instanceof Formateur formateur) {
            return formateur.getFormations();
        }

        if (utilisateur instanceof Etudiant etudiant) {
            return List.of(etudiant.getFormation());
        }

        return Collections.emptyList();
    }

    public List<EmploiDuTemps> mesEmploisDuTemps() {

        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        String email = auth.getName();

        Utilisateur utilisateur =
                utilisateurRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("Utilisateur introuvable"));

        if (!(utilisateur instanceof Etudiant etudiant)) {
            throw new RuntimeException(
                    "Cette fonctionnalité est réservée aux étudiants");
        }


        return emploiDuTempsRepository.findByFormationId(
                etudiant.getFormation().getId()
        );
    }
}