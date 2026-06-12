package sn.uchk.universite.service;

import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.entity.Reunion;
import sn.uchk.universite.repository.FormationRepository;
import sn.uchk.universite.repository.ReunionRepository;

import java.util.List;

@Service
public class ReunionService {

    private final ReunionRepository reunionRepository;
    private final FormationRepository formationRepository;

    public ReunionService(
            ReunionRepository reunionRepository,
            FormationRepository formationRepository) {

        this.reunionRepository = reunionRepository;
        this.formationRepository = formationRepository;
    }

    public Reunion ajouter(Reunion reunion, Long formationId) {

        Formation formation = formationRepository.findById(formationId)
                .orElseThrow(() ->
                        new RuntimeException("Formation introuvable"));

        reunion.setFormation(formation);

        return reunionRepository.save(reunion);
    }

    public List<Reunion> lister() {
        return reunionRepository.findAll();
    }

    public Reunion afficher(Long id) {
        return reunionRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Réunion introuvable"));
    }

    public List<Reunion> parFormation(Long formationId) {
        return reunionRepository.findByFormationId(formationId);
    }
}
