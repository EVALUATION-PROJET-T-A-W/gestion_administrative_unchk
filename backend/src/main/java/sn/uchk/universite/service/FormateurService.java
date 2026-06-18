package sn.uchk.universite.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sn.uchk.universite.dto.FormateurDashboardDTO;
import sn.uchk.universite.entity.EmploiDuTemps;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.FormateurRepository;
import sn.uchk.universite.repository.UtilisateurRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FormateurService {

    private final FormateurRepository formateurRepository;
    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;

    public Formateur ajouter(Formateur formateur) {

        if (utilisateurRepository.existsByEmail(formateur.getEmail())) {
            throw new RuntimeException("Cet email est déjà utilisé");
        }

        formateur.setMotDePasse(
                passwordEncoder.encode(formateur.getMotDePasse())
        );

        return formateurRepository.save(formateur);
    }

    public List<Formateur> lister() {
        return formateurRepository.findAll();
    }

    public Formateur afficher(Long id) {
        return formateurRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Formateur introuvable"));
    }

    public Formateur modifier(Long id, Formateur data) {

        Formateur formateur = afficher(id);

        formateur.setNom(data.getNom());
        formateur.setPrenom(data.getPrenom());
        formateur.setEmail(data.getEmail());
        formateur.setTelephone(data.getTelephone());
        formateur.setSpecialite(data.getSpecialite());
        formateur.setGrade(data.getGrade());
        formateur.setDepartement(data.getDepartement());
        formateur.setTypeFormateur(data.getTypeFormateur());

        return formateurRepository.save(formateur);
    }

    public void supprimer(Long id) {
        formateurRepository.deleteById(id);
    }
    @Transactional(readOnly = true)
    public List<Formation> getMesFormations(String email) {

        Formateur formateur = formateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Formateur introuvable"));

        return formateur.getFormations();
    }

    public List<EmploiDuTemps> getMesEmploisDuTemps(String email) {

        Formateur formateur = formateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Formateur introuvable"));

        return formateur.getFormations()
                .stream()
                .flatMap(f -> f.getEmploisDuTemps().stream())
                .toList();
    }


    @Transactional(readOnly = true)

    public FormateurDashboardDTO getDashboard(String email) {

        Formateur formateur = formateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Formateur introuvable"));

        List<Formation> formations = formateur.getFormations();

        List<EmploiDuTemps> emplois = formations.stream()
                .flatMap(f -> f.getEmploisDuTemps().stream())
                .toList();

        FormateurDashboardDTO dto = new FormateurDashboardDTO();

        dto.setFormations(formations);
        dto.setEmploisDuTemps(emplois);

        dto.setTotalFormations(formations.size());
        dto.setTotalEmploisDuTemps(emplois.size());

        dto.setTotalEtudiants(0);
        dto.setNombreNotifications(0);

        return dto;
    }

}