package sn.uchk.universite.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import sn.uchk.universite.dto.FormationRequest;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.repository.FormateurRepository;
import sn.uchk.universite.repository.FormationRepository;

import java.util.List;

@Service
public class FormationService {

    private final FormationRepository formationRepository;
    private final FormateurRepository formateurRepository;
    public FormationService(
            FormationRepository formationRepository,
            FormateurRepository formateurRepository
    ) {
        this.formationRepository = formationRepository;
        this.formateurRepository = formateurRepository;
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

    @Transactional
    public Formation affecterFormateur(Long formationId, Long formateurId) {

        Formation formation = formationRepository.findById(formationId)
                .orElseThrow(() -> new RuntimeException("Formation introuvable"));

        Formateur formateur = formateurRepository.findById(formateurId)
                .orElseThrow(() -> new RuntimeException("Formateur introuvable"));

        if (!formation.getFormateurs().contains(formateur)) {
            formation.getFormateurs().add(formateur);
        }

        return formationRepository.save(formation);
    }
}