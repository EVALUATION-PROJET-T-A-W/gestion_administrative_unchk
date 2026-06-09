package sn.uchk.universite.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import sn.uchk.universite.dto.AdministratifRegisterRequest;
import sn.uchk.universite.dto.EtudiantRegisterRequest;
import sn.uchk.universite.dto.FormateurRegisterRequest;
import sn.uchk.universite.service.InscriptionService;

@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {

    private final InscriptionService inscriptionService;

    public UtilisateurController(InscriptionService inscriptionService) {
        this.inscriptionService = inscriptionService;
    }

    @PostMapping(
            value = "/etudiant",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> inscrireEtudiant(
            @ModelAttribute EtudiantRegisterRequest request) {

        return ResponseEntity.ok(
                inscriptionService.inscrireEtudiant(request)
        );
    }
    @PostMapping(
            value = "/formateur",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> inscrireFormateur(
            @ModelAttribute FormateurRegisterRequest request) {

        return ResponseEntity.ok(
                inscriptionService.inscrireFormateur(request)
        );
    }

    // =========================
    // ADMINISTRATIF
    // =========================
    @PostMapping(
            value = "/administratif",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> inscrireAdministratif(
            @ModelAttribute AdministratifRegisterRequest request) {

        return ResponseEntity.ok(
                inscriptionService.inscrireAdministratif(request)
        );
    }
}