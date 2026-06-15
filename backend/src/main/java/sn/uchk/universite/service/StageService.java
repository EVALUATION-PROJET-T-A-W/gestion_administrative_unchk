package sn.uchk.universite.service;



import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.entity.Stage;
import sn.uchk.universite.repository.EtudiantRepository;
import sn.uchk.universite.repository.StageRepository;

import java.util.List;

@Service
public class StageService {

    private final StageRepository stageRepository;
    private final EtudiantRepository etudiantRepository;

    public StageService(
            StageRepository stageRepository,
            EtudiantRepository etudiantRepository) {

        this.stageRepository = stageRepository;
        this.etudiantRepository = etudiantRepository;
    }

    public Stage ajouter(Stage stage, Long etudiantId) {

        Etudiant etudiant = etudiantRepository.findById(etudiantId)
                .orElseThrow(() ->
                        new RuntimeException("Etudiant introuvable"));

        stage.setEtudiant(etudiant);

        return stageRepository.save(stage);
    }

    public List<Stage> lister() {
        return stageRepository.findAll();
    }

    public Stage afficher(Long id) {
        return stageRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Stage introuvable"));
    }

    public Stage modifier(Long id, Stage data) {

        Stage stage = afficher(id);

        stage.setEntreprise(data.getEntreprise());
        stage.setDateDebut(data.getDateDebut());
        stage.setDateFin(data.getDateFin());
        stage.setBilan(data.getBilan());
        stage.setStatut(data.getStatut());

        return stageRepository.save(stage);
    }

    public void supprimer(Long id) {
        stageRepository.deleteById(id);
    }

    public List<Stage> stagesParEtudiant(Long etudiantId) {
        return stageRepository.findByEtudiantId(etudiantId);
    }
    public List<Stage> mesStages(Authentication authentication) {

        String email = authentication.getName();
        return stageRepository.findByEtudiantEmail(email);
    }
}
