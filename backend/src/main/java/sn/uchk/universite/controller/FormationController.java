package sn.uchk.universite.controller;

import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.dto.FormationRequest;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.service.FormationService;

import java.util.List;
@RestController
@RequestMapping("/api/formations")
@CrossOrigin("*")
public class FormationController {
    private final FormationService formationService;

    public FormationController(FormationService formationService) {
        this.formationService = formationService;
    }

    @PostMapping
    public Formation ajouter(
            @RequestBody FormationRequest request) {

        return formationService.ajouter(request);
    }

    @GetMapping
    public List<Formation> lister() {
        return formationService.lister();
    }

    @GetMapping("/{id}")
    public Formation detail(@PathVariable Long id) {
        return formationService.detail(id);
    }

    @DeleteMapping("/{id}")
    public String supprimer(@PathVariable Long id) {

        formationService.supprimer(id);

        return "Formation supprimée avec succès";
    }
}
