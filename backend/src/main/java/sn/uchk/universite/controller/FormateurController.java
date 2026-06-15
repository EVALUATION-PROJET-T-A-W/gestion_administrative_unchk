package sn.uchk.universite.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.service.FormateurService;
import java.util.List;

@RestController
@RequestMapping("/api/formateurs")
@RequiredArgsConstructor
public class FormateurController {

    private final FormateurService formateurService;

    @PostMapping
    public ResponseEntity<?> ajouter(
            @RequestBody Formateur formateur) {

        try {
            return ResponseEntity.ok(
                    formateurService.ajouter(formateur));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body(e.getMessage());
        }
    }
    @GetMapping
    public List<Formateur> lister() {
        return formateurService.lister();
    }

    @GetMapping("/{id}")
    public Formateur afficher(@PathVariable Long id) {
        return formateurService.afficher(id);
    }

    @PutMapping("/{id}")
    public Formateur modifier(
            @PathVariable Long id,
            @RequestBody Formateur formateur) {

        return formateurService.modifier(id, formateur);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        formateurService.supprimer(id);
    }
}
