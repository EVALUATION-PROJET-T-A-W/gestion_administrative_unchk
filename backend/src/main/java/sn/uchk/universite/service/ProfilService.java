package sn.uchk.universite.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import sn.uchk.universite.dto.ProfilResponse;
import sn.uchk.universite.entity.Administratif;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.entity.Utilisateur;
import sn.uchk.universite.repository.UtilisateurRepository;

@Service
public class ProfilService {

    private final UtilisateurRepository utilisateurRepository;

    public ProfilService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
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
}