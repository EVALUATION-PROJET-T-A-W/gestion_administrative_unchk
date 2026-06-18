package sn.uchk.universite.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Partenaire;
import sn.uchk.universite.service.PartenaireService;

import java.util.List;

@RestController
@RequestMapping("/api/partenaires")
@CrossOrigin("*")
@RequiredArgsConstructor
public class PartenaireController {

    private final PartenaireService partenaireService;

    @PostMapping
    public Partenaire ajouter(
            @RequestBody Partenaire partenaire) {

        return partenaireService.ajouter(partenaire);

    }

    @GetMapping
    public List<Partenaire> lister() {

        return partenaireService.lister();

    }

    @GetMapping("/{id}")
    public Partenaire afficher(
            @PathVariable Long id) {

        return partenaireService.afficher(id);

    }

    @PutMapping("/{id}")
    public Partenaire modifier(
            @PathVariable Long id,
            @RequestBody Partenaire partenaire) {

        return partenaireService.modifier(id, partenaire);

    }

    @DeleteMapping("/{id}")
    public void supprimer(
            @PathVariable Long id) {

        partenaireService.supprimer(id);

    }

}