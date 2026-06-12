package sn.uchk.universite.controller;

import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Reunion;
import sn.uchk.universite.service.ReunionService;

import java.util.List;

@RestController
@RequestMapping("/api/reunions")
@CrossOrigin("*")
public class ReunionController {

    private final ReunionService reunionService;

    public ReunionController(ReunionService reunionService) {
        this.reunionService = reunionService;
    }

    @PostMapping("/{formationId}")
    public Reunion ajouter(
            @RequestBody Reunion reunion,
            @PathVariable Long formationId) {

        return reunionService.ajouter(reunion, formationId);
    }

    @GetMapping
    public List<Reunion> lister() {
        return reunionService.lister();
    }

    @GetMapping("/{id}")
    public Reunion afficher(@PathVariable Long id) {
        return reunionService.afficher(id);
    }

    @GetMapping("/formation/{formationId}")
    public List<Reunion> parFormation(
            @PathVariable Long formationId) {

        return reunionService.parFormation(formationId);
    }
}
