package sn.uchk.universite.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sn.uchk.universite.dto.ProfilResponse;
import sn.uchk.universite.entity.EmploiDuTemps;
import sn.uchk.universite.entity.Formation;
import sn.uchk.universite.service.ProfilService;

import java.util.List;

@RestController
@RequestMapping("/api/profil")
public class ProfilController {

    private final ProfilService profilService;

    public ProfilController(ProfilService profilService) {
        this.profilService = profilService;
    }

    @GetMapping("/me")
    public ResponseEntity<ProfilResponse> getMyProfile() {
        return ResponseEntity.ok(profilService.getMyProfile());
    }
    @PutMapping("/modifier")
    public ProfilResponse modifierProfil(
            @RequestParam String telephone,
            @RequestParam(required = false)
            MultipartFile photo) {

        return profilService.modifierMonProfil(
                telephone,
                photo
        );
    }

    @GetMapping("/mes-formations")
    public List<Formation> mesFormations() {
        return profilService.mesFormations();
    }
    @GetMapping("/mes-emplois")
    public List<EmploiDuTemps> mesEmploisDuTemps() {
        return profilService.mesEmploisDuTemps();
    }
}
