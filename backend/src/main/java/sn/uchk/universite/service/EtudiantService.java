package sn.uchk.universite.service;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sn.uchk.universite.dto.EtudiantResponse;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.repository.EtudiantRepository;

import java.util.List;

@Service
public class EtudiantService {

    private final EtudiantRepository etudiantRepository;
    private final PasswordEncoder passwordEncoder;

    public EtudiantService(
            EtudiantRepository etudiantRepository,
            PasswordEncoder passwordEncoder) {

        this.etudiantRepository = etudiantRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<EtudiantResponse> getAll() {

        return etudiantRepository.findAll().stream().map(e -> {

            EtudiantResponse dto = new EtudiantResponse();

            dto.setId(e.getId());
            dto.setNom(e.getNom());
            dto.setPrenom(e.getPrenom());
            dto.setEmail(e.getEmail());
            dto.setTelephone(e.getTelephone());
            dto.setIne(e.getIne());
            dto.setPromotion(e.getPromotion());
            dto.setAnneeDebut(e.getAnneeDebut());
            dto.setAnneeSortie(e.getAnneeSortie());

            if (e.getFormation() != null) {
                dto.setFormationNom(e.getFormation().getDescription()); // ou getNom()
            }

            return dto;

        }).toList();
    }

    public Etudiant getById(Long id) {
        return etudiantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Etudiant introuvable"));
    }

    public Etudiant create(Etudiant etudiant) {

        etudiant.setMotDePasse(
                passwordEncoder.encode(etudiant.getMotDePasse())
        );

        return etudiantRepository.save(etudiant);
    }

    public Etudiant update(Long id, Etudiant data) {

        Etudiant etudiant = getById(id);

        etudiant.setNom(data.getNom());
        etudiant.setPrenom(data.getPrenom());
        etudiant.setEmail(data.getEmail());
        etudiant.setTelephone(data.getTelephone());

        if (data.getMotDePasse() != null &&
                !data.getMotDePasse().isBlank()) {

            etudiant.setMotDePasse(
                    passwordEncoder.encode(data.getMotDePasse())
            );
        }

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
