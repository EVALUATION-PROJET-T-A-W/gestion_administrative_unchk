package sn.uchk.universite.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.dto.FormateurDashboardDTO;
import sn.uchk.universite.entity.EmploiDuTemps;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.service.FormateurService;
import sn.uchk.universite.service.ProfilService;

import java.util.List;

@RestController
@RequestMapping("/api/formateurs")
@RequiredArgsConstructor
public class FormateurController {

    private final FormateurService formateurService;
    private final ProfilService profilService;
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


    @GetMapping("/mes-formations")
    public ResponseEntity<List<Formation>> mesFormations(
            Authentication authentication) {

        String email = authentication.getName();

        return ResponseEntity.ok(
                formateurService.getMesFormations(email)
        );
    }
    @GetMapping("/formateur-emplois")
    public List<EmploiDuTemps> mesEmploisDuTemps() {
        return profilService.mesEmploisDuTemps();
    }
    @GetMapping("/mes-emplois-du-temps")
    public ResponseEntity<List<EmploiDuTemps>> mesEmplois(Authentication authentication) {

        String email = authentication.getName();

        return ResponseEntity.ok(
                formateurService.getMesEmploisDuTemps(email)
        );
    }
    @GetMapping("/dashboard")
    public ResponseEntity<FormateurDashboardDTO> getDashboard(Authentication authentication) {

        String email = authentication.getName();

        return ResponseEntity.ok(
                formateurService.getDashboard(email)
        );
    }
}
