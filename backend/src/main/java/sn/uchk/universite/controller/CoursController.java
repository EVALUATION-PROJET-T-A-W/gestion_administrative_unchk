package sn.uchk.universite.controller;

import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Cours;
import sn.uchk.universite.service.CoursService;

import java.util.List;

@RestController
@RequestMapping("/api/cours")
public class CoursController {

    private final CoursService coursService;

    public CoursController(CoursService coursService) {
        this.coursService = coursService;
    }

    @PostMapping("/formation/{formationId}")
    public Cours ajouter(@PathVariable Long formationId,
                         @RequestBody Cours cours) {
        return coursService.ajouter(formationId, cours);
    }

    @GetMapping
    public List<Cours> lister() {
        return coursService.lister();
    }

    @PutMapping("/{id}")
    public Cours modifier(@PathVariable Long id,
                          @RequestBody Cours cours) {
        return coursService.modifier(id, cours);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        coursService.supprimer(id);
    }
}