package sn.uchk.universite.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import sn.uchk.universite.entity.Budget;
import sn.uchk.universite.service.BudgetService;

import java.util.List;

@RestController
@RequestMapping("/api/budgets")
@CrossOrigin("*")
public class BudgetController {
    private final BudgetService budgetService;

    public BudgetController(
            BudgetService budgetService) {

        this.budgetService = budgetService;
    }

    @PostMapping
    public Budget ajouter(
            @RequestBody Budget budget,
            Authentication authentication) {

        return budgetService.ajouter(
                budget,
                authentication);
    }

    @GetMapping
    public List<Budget> lister() {
        return budgetService.lister();
    }

    @GetMapping("/{id}")
    public Budget afficher(
            @PathVariable Long id) {

        return budgetService.afficher(id);
    }

    @PutMapping("/{id}")
    public Budget modifier(
            @PathVariable Long id,
            @RequestBody Budget budget) {

        return budgetService.modifier(id, budget);
    }

    @DeleteMapping("/{id}")
    public void supprimer(
            @PathVariable Long id) {

        budgetService.supprimer(id);
    }

    @GetMapping("/mes-budgets")
    public List<Budget> mesBudgets(
            Authentication authentication) {

        return budgetService.mesBudgets(authentication);
    }
}
