package sn.uchk.universite.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Stage;
import sn.uchk.universite.service.StageService;

import java.util.List;

@RestController
@RequestMapping("/api/stages")
@CrossOrigin("*")
public class StageController {

    private final StageService stageService;

    public StageController(StageService stageService) {
        this.stageService = stageService;
    }

    @PostMapping("/{etudiantId}")
    public Stage ajouter(
            @RequestBody Stage stage,
            @PathVariable Long etudiantId) {

        return stageService.ajouter(stage, etudiantId);
    }

    @GetMapping
    public List<Stage> lister() {
        return stageService.lister();
    }

    @GetMapping("/{id}")
    public Stage afficher(@PathVariable Long id) {
        return stageService.afficher(id);
    }

    @PutMapping("/{id}")
    public Stage modifier(
            @PathVariable Long id,
            @RequestBody Stage stage) {

        return stageService.modifier(id, stage);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        stageService.supprimer(id);
    }

    @GetMapping("/etudiant/{etudiantId}")
    public List<Stage> stagesParEtudiant(
            @PathVariable Long etudiantId) {

        return stageService.stagesParEtudiant(etudiantId);
    }
    @GetMapping("/mes-stages")
    public List<Stage> mesStages(Authentication authentication) {

        return stageService.mesStages(authentication);
    }
}
