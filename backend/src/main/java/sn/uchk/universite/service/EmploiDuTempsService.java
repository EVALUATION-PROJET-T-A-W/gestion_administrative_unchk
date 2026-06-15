package sn.uchk.universite.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.EmploiDuTemps;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.EmploiDuTempsRepository;
import sn.uchk.universite.repository.FormationRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmploiDuTempsService {
    private final EmploiDuTempsRepository emploiDuTempsRepository;
    private final FormationRepository formationRepository;

    public EmploiDuTemps ajouter(EmploiDuTemps emploiDuTemps) {

        Long formationId =
                emploiDuTemps.getFormation().getId();

        Formation formation =
                formationRepository.findById(formationId)
                        .orElseThrow(() ->
                                new RuntimeException("Formation introuvable"));

        emploiDuTemps.setFormation(formation);

        return emploiDuTempsRepository.save(emploiDuTemps);
    }

    public List<EmploiDuTemps> lister() {
        return emploiDuTempsRepository.findAll();
    }

    public EmploiDuTemps afficher(Long id) {
        return emploiDuTempsRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Emploi du temps introuvable"));
    }

    public EmploiDuTemps modifier(Long id,
                                  EmploiDuTemps data) {

        EmploiDuTemps emploiDuTemps =
                afficher(id);

        Formation formation =
                formationRepository.findById(
                                data.getFormation().getId())
                        .orElseThrow(() ->
                                new RuntimeException("Formation introuvable"));

        emploiDuTemps.setJour(data.getJour());
        emploiDuTemps.setHeureDebut(data.getHeureDebut());
        emploiDuTemps.setHeureFin(data.getHeureFin());
        emploiDuTemps.setSalle(data.getSalle());
        emploiDuTemps.setModule(data.getModule());
        emploiDuTemps.setFormation(formation);

        return emploiDuTempsRepository.save(emploiDuTemps);
    }

    public void supprimer(Long id) {
        emploiDuTempsRepository.deleteById(id);
    }
}
