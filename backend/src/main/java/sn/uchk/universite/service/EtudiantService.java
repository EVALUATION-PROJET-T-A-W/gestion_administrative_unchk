package sn.uchk.universite.service;


import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.repository.EtudiantRepository;

import java.util.List;

@Service
public class EtudiantService {

    private final EtudiantRepository etudiantRepository;

    public EtudiantService(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }

    public List<Etudiant> getAll() {
        return etudiantRepository.findAll();
    }

    public Etudiant getById(Long id) {
        return etudiantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Etudiant introuvable"));
    }

    public Etudiant create(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public Etudiant update(Long id, Etudiant data) {

        Etudiant etudiant = getById(id);

        etudiant.setNom(data.getNom());
        etudiant.setPrenom(data.getPrenom());
        etudiant.setEmail(data.getEmail());
        etudiant.setTelephone(data.getTelephone());

        etudiant.setIne(data.getIne());
        etudiant.setPromotion(data.getPromotion());
        etudiant.setAnneeDebut(data.getAnneeDebut());
        etudiant.setAnneeSortie(data.getAnneeSortie());

        return etudiantRepository.save(etudiant);
    }

    public void delete(Long id) {
        etudiantRepository.deleteById(id);
    }
}
