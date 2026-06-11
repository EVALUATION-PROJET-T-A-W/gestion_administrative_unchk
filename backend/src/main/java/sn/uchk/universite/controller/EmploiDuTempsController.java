package sn.uchk.universite.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.EmploiDuTemps;
import sn.uchk.universite.service.EmploiDuTempsService;

import java.util.List;

@RestController
@RequestMapping("/api/emplois-du-temps")
@CrossOrigin("*")
@RequiredArgsConstructor
public class EmploiDuTempsController {
    private final EmploiDuTempsService emploiDuTempsService;

    @PostMapping
    public EmploiDuTemps ajouter(
            @RequestBody EmploiDuTemps emploiDuTemps) {

        return emploiDuTempsService.ajouter(
                emploiDuTemps);
    }

    @GetMapping
    public List<EmploiDuTemps> lister() {

        return emploiDuTempsService.lister();
    }

    @GetMapping("/{id}")
    public EmploiDuTemps afficher(
            @PathVariable Long id) {

        return emploiDuTempsService.afficher(id);
    }

    @PutMapping("/{id}")
    public EmploiDuTemps modifier(
            @PathVariable Long id,
            @RequestBody EmploiDuTemps emploiDuTemps) {

        return emploiDuTempsService.modifier(
                id,
                emploiDuTemps);
    }

    @DeleteMapping("/{id}")
    public void supprimer(
            @PathVariable Long id) {

        emploiDuTempsService.supprimer(id);
    }
}
