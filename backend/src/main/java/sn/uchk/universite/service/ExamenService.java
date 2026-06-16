package sn.uchk.universite.service;

import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Examen;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.ExamenRepository;
import sn.uchk.universite.repository.FormationRepository;

import java.util.List;

@Service
public class ExamenService {

    private final ExamenRepository examenRepository;
    private final FormationRepository formationRepository;

    public ExamenService(ExamenRepository examenRepository, FormationRepository formationRepository) {
        this.examenRepository = examenRepository;
        this.formationRepository = formationRepository;
    }

    public Examen ajouter(Examen examen, Long formationId) {
        Formation formation = formationRepository.findById(formationId)
                .orElseThrow(() -> new IllegalArgumentException("La formation n'existe pas"));

        examen.setFormation(formation);
        return examenRepository.save(examen);
    }

    public List<Examen> lister() {
        return examenRepository.findAll();
    }

    public Examen modifier(Long id, Examen examen) {

            Examen existing = examenRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Examen n'existe pas"));

            existing.setMatiere(examen.getMatiere());
            existing.setDateExamen(examen.getDateExamen());
            existing.setSalle(examen.getSalle());

            if (examen.getFormation() != null && examen.getFormation().getId() != null) {
                Formation formation = formationRepository.findById(examen.getFormation().getId())
                        .orElseThrow(() -> new IllegalArgumentException("Formation n'existe pas"));

                existing.setFormation(formation);
            }

            return examenRepository.save(existing);
        }

    public void supprimer(Long id) {
        Examen existing = examenRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Examen n'existe pas"));

        examenRepository.delete(existing);
    }
}