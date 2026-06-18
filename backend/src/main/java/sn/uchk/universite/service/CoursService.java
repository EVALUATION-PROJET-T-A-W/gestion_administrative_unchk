package sn.uchk.universite.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sn.uchk.universite.dto.CoursRequest;
import sn.uchk.universite.entity.Cours;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.CoursRepository;
import sn.uchk.universite.repository.EtudiantRepository;
import sn.uchk.universite.repository.FormateurRepository;
import sn.uchk.universite.repository.FormationRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CoursService {

    private final CoursRepository coursRepository;
    private final FormateurRepository formateurRepository;
    private final EtudiantRepository etudiantRepository;
    private final FormationRepository formationRepository;
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

    public Cours ajouter(CoursRequest request) {

        Formation formation = formationRepository.findById(
                        request.getFormationId())
                .orElseThrow(() -> new RuntimeException("Formation introuvable"));

        Cours cours = new Cours();

        cours.setTitre(request.getTitre());
        cours.setDescription(request.getDescription());
        cours.setDateCours(request.getDateCours());
        cours.setSupportCours(request.getSupportCours());
        cours.setFormation(formation);

        return coursRepository.save(cours);
    }

    public List<Cours> lister() {
        return coursRepository.findAll();
    }

    public Cours afficher(Long id) {

        return coursRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cours introuvable"));

    }

    public Cours modifier(Long id, CoursRequest request) {

        Cours cours = afficher(id);

        Formation formation = formationRepository.findById(
                        request.getFormationId())
                .orElseThrow(() -> new RuntimeException("Formation introuvable"));

        cours.setTitre(request.getTitre());
        cours.setDescription(request.getDescription());
        cours.setDateCours(request.getDateCours());
        cours.setSupportCours(request.getSupportCours());
        cours.setFormation(formation);

        return coursRepository.save(cours);

    }

    public void supprimer(Long id) {

        coursRepository.deleteById(id);

    }

}