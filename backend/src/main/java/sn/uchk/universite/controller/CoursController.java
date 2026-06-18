package sn.uchk.universite.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Cours;
import sn.uchk.universite.service.CoursService;

import java.util.List;

@RestController
@RequestMapping("/api/cours")
@RequiredArgsConstructor
public class CoursController {

    private final CoursService coursService;

    @GetMapping("/mes-cours")
    public ResponseEntity<List<Cours>> getMesCours(Authentication auth) {

        String email = auth.getName();

        List<Cours> cours = coursService.getMesCours(email);

        cours.forEach(c ->
                System.out.println(c.getTitre())
        );

        return ResponseEntity.ok(cours);
    }
    @GetMapping("/mes-cours-etudiant")
    public ResponseEntity<List<Cours>> getMesCoursEtudiant(
            Authentication authentication) {

        return ResponseEntity.ok(
                coursService.getMesCoursEtudiant(authentication.getName())
        );
    }
}