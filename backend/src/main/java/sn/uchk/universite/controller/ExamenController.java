package sn.uchk.universite.controller;

import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Examen;
import sn.uchk.universite.service.ExamenService;

import java.util.List;

@RestController
@RequestMapping("/api/examens")
public class ExamenController {

    private final ExamenService examenService;

    public ExamenController(ExamenService examenService) {
        this.examenService = examenService;
    }

    @PostMapping("/formation/{formationId}")
    public Examen ajouter(@PathVariable Long formationId,
                          @RequestBody Examen examen) {
        return examenService.ajouter(examen, formationId);
    }

    @GetMapping
    public List<Examen> lister() {
        return examenService.lister();
    }

    @PutMapping("/{id}")
    public Examen modifier(@PathVariable Long id,
                         @RequestBody Examen examen) {
        return examenService.modifier(id, examen);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        examenService.supprimer(id);
    }
}