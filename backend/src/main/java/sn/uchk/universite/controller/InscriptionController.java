package sn.uchk.universite.controller;


import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.dto.AdministratifRegisterRequest;
import sn.uchk.universite.dto.EtudiantRegisterRequest;
import sn.uchk.universite.dto.FormateurRegisterRequest;
import sn.uchk.universite.entity.Administratif;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.entity.Formateur;
import sn.uchk.universite.service.InscriptionService;

@RestController
@RequestMapping("/api/inscription")
@CrossOrigin("*")
public class InscriptionController {

    private final InscriptionService service;

    public InscriptionController(InscriptionService service) {
        this.service = service;
    }

    @PostMapping("/etudiant")
    public Etudiant inscrireEtudiant(
            @ModelAttribute EtudiantRegisterRequest request) {
        return service.inscrireEtudiant(request);
    }

    @PostMapping("/formateur")
    public Formateur inscrireFormateur(
            @ModelAttribute FormateurRegisterRequest request) {
        return service.inscrireFormateur(request);
    }

    @PostMapping("/administratif")
    public Administratif inscrireAdministratif(
            @ModelAttribute AdministratifRegisterRequest request) {
        return service.inscrireAdministratif(request);
    }
}
