package sn.uchk.universite.controller;

import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Evaluation;
import sn.uchk.universite.service.EvaluationService;

import java.util.List;

@RestController
@RequestMapping("/api/evaluations")
public class EvaluationController {

    private final EvaluationService evaluationService;

    public EvaluationController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @PostMapping("/cours/{coursId}")
    public Evaluation ajouter(@PathVariable Long coursId,
                              @RequestBody Evaluation evaluation) {
        return evaluationService.ajouter(evaluation, coursId);
    }

    @GetMapping
    public List<Evaluation> lister() {
        return evaluationService.lister();
    }

    @PutMapping("/{id}")
    public Evaluation modifier(@PathVariable Long id,
                             @RequestBody Evaluation evaluation) {
        return evaluationService.modifier(id, evaluation);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        evaluationService.supprimer(id);
    }
}