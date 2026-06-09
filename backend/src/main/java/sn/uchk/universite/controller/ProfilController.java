package sn.uchk.universite.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sn.uchk.universite.dto.ProfilResponse;
import sn.uchk.universite.service.ProfilService;

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
}
