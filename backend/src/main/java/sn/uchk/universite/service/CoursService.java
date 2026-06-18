package sn.uchk.universite.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sn.uchk.universite.entity.Cours;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.CoursRepository;
import sn.uchk.universite.repository.EtudiantRepository;
import sn.uchk.universite.repository.FormateurRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CoursService {

    private final CoursRepository coursRepository;
    private final FormateurRepository formateurRepository;
    private final EtudiantRepository etudiantRepository;
    @Transactional(readOnly = true)
    public List<Cours> getMesCours(String email) {

        Optional<Formateur> formateur = formateurRepository.findByEmail(email);

        if (formateur.isPresent()) {

            List<Long> ids = formateur.get()
                    .getFormations()
                    .stream()
                    .map(Formation::getId)
                    .toList();

            return coursRepository.findByFormation_IdIn(ids);
        }

        Etudiant etudiant = etudiantRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));

        return coursRepository.findByFormation_Id(
                etudiant.getFormation().getId()
        );
    }
    public List<Cours> getMesCoursEtudiant(String email) {

        Etudiant etudiant = etudiantRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Étudiant introuvable"));

        return coursRepository.findByFormation_Id(
                etudiant.getFormation().getId()
        );
    }
}