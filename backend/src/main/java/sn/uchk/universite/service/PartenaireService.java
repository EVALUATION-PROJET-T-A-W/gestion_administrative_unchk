package sn.uchk.universite.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Partenaire;
import sn.uchk.universite.repository.PartenaireRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PartenaireService {

    private final PartenaireRepository partenaireRepository;

    public Partenaire ajouter(Partenaire partenaire) {

        return partenaireRepository.save(partenaire);

    }

    public List<Partenaire> lister() {

        return partenaireRepository.findAll();

    }

    public Partenaire afficher(Long id) {

        return partenaireRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Partenaire introuvable"));

    }

    public Partenaire modifier(Long id, Partenaire partenaire) {

        Partenaire p = afficher(id);

        p.setNom(partenaire.getNom());
        p.setTypePartenaire(partenaire.getTypePartenaire());
        p.setDomaine(partenaire.getDomaine());
        p.setEmail(partenaire.getEmail());
        p.setTelephone(partenaire.getTelephone());
        p.setAdresse(partenaire.getAdresse());
        p.setPays(partenaire.getPays());
        p.setActif(partenaire.getActif());
        p.setDescription(partenaire.getDescription());

        return partenaireRepository.save(p);

    }

    public void supprimer(Long id) {

        partenaireRepository.deleteById(id);

    }

}