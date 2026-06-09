package sn.uchk.universite.service;

import org.springframework.stereotype.Service;
import sn.uchk.universite.dto.FormationRequest;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.FormationRepository;

import java.util.List;

@Service
public class FormationService {

    private final FormationRepository formationRepository;

    public FormationService(FormationRepository formationRepository) {
        this.formationRepository = formationRepository;
    }

    public Formation ajouter(FormationRequest request) {

        Formation formation = new Formation();

        formation.setNomFormation(request.getNomFormation());
        formation.setTypeFormation(request.getTypeFormation());
        formation.setNiveau(request.getNiveau());
        formation.setDateDebut(request.getDateDebut());
        formation.setDateFin(request.getDateFin());
        formation.setMontant(request.getMontant());
        formation.setTypeFinancement(request.getTypeFinancement());
        formation.setNombreHomme(request.getNombreHomme());
        formation.setNombreFemme(request.getNombreFemme());
        formation.setDescription(request.getDescription());

        return formationRepository.save(formation);
    }

    public List<Formation> lister() {
        return formationRepository.findAll();
    }

    public Formation detail(Long id) {
        return formationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Formation introuvable"));
    }

    public void supprimer(Long id) {
        formationRepository.deleteById(id);
    }
}