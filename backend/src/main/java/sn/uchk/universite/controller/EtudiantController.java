package sn.uchk.universite.controller;

import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Etudiant;
import sn.uchk.universite.service.EtudiantService;
import java.util.List;

@RestController
@RequestMapping("/api/etudiants")
@CrossOrigin("*")
public class EtudiantController {

    private final EtudiantService service;

    public EtudiantController(EtudiantService service) {
        this.service = service;
    }
    @GetMapping

    public List<Etudiant> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")

    public Etudiant getById(@PathVariable Long id) {

        return service.getById(id);
    }

    @PostMapping
    public Etudiant create(@RequestBody Etudiant etudiant) {
        return service.create(etudiant);
    }

    @PutMapping("/{id}")
    public Etudiant update(

            @PathVariable Long id,

            @RequestBody Etudiant etudiant) {

        return service.update(id, etudiant);
    }

    @DeleteMapping("/{id}")

    public String delete(@PathVariable Long id) {

        service.delete(id);

        return "Etudiant supprimé avec succès";
    }
}
