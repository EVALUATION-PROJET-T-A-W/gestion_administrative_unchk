package sn.uchk.universite.controller;

import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Rapport;
import sn.uchk.universite.service.RapportService;

import java.util.List;

@RestController
@RequestMapping("/api/rapports")
@CrossOrigin("*")
public class RapportController {

    private final RapportService rapportService;

    public RapportController(RapportService rapportService) {
        this.rapportService = rapportService;
    }

    @PostMapping("/{reunionId}")
    public Rapport publier(
            @RequestBody Rapport rapport,
            @PathVariable Long reunionId) {

        return rapportService.publier(rapport, reunionId);
    }

    @GetMapping
    public List<Rapport> lister() {
        return rapportService.lister();
    }

    @GetMapping("/{id}")
    public Rapport afficher(@PathVariable Long id) {
        return rapportService.afficher(id);
    }

    @GetMapping("/reunion/{reunionId}")
    public List<Rapport> parReunion(
            @PathVariable Long reunionId) {

        return rapportService.parReunion(reunionId);
    }
}
