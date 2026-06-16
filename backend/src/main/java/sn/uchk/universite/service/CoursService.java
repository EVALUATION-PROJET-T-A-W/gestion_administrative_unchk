package sn.uchk.universite.service;

import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Cours;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.CoursRepository;
import sn.uchk.universite.repository.FormationRepository;

import java.util.List;

@Service
public class CoursService {

    private final CoursRepository coursRepository;
    private final FormationRepository formationRepository;

    public CoursService(CoursRepository coursRepository, FormationRepository formationRepository) {
        this.coursRepository = coursRepository;
        this.formationRepository = formationRepository;
    }

    public Cours ajouter(Long formationId, Cours cours) {
        Formation formation = formationRepository.findById(formationId)
                .orElseThrow(() -> new RuntimeException("Formation introuvable"));

        cours.setFormation(formation);
        return coursRepository.save(cours);
    }

    public List<Cours> lister() {
        return coursRepository.findAll();
    }


    public Cours modifier(Long id, Cours nouveauCours) {
        Cours existing = coursRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cours introuvable"));

        existing.setTitre(nouveauCours.getTitre());
        existing.setDescription(nouveauCours.getDescription());
        existing.setDateCours(nouveauCours.getDateCours());
        existing.setSupportCours(nouveauCours.getSupportCours());
        existing.setFormation(nouveauCours.getFormation());

        return coursRepository.save(existing);
    }

    public void supprimer(Long id) {
        if (!coursRepository.existsById(id)) {
            throw new RuntimeException("Cours introuvable");
        }
        coursRepository.deleteById(id);
    }
}