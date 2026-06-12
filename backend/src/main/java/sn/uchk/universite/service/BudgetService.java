package sn.uchk.universite.service;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Administratif;
import sn.uchk.universite.entity.Budget;
import sn.uchk.universite.repository.AdministratifRepository;
import sn.uchk.universite.repository.BudgetRepository;

import java.util.List;

@Service
public class BudgetService {
    private final BudgetRepository budgetRepository;
    private final AdministratifRepository administratifRepository;

    public BudgetService(
            BudgetRepository budgetRepository,
            AdministratifRepository administratifRepository) {

        this.budgetRepository = budgetRepository;
        this.administratifRepository = administratifRepository;
    }

    public Budget ajouter(
            Budget budget,
            Authentication authentication) {

        String email = authentication.getName();

        Administratif administratif =
                administratifRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("Administratif introuvable"));

        budget.setAdministratif(administratif);

        return budgetRepository.save(budget);
    }

    public List<Budget> lister() {
        return budgetRepository.findAll();
    }

    public Budget afficher(Long id) {
        return budgetRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Budget introuvable"));
    }

    public Budget modifier(Long id, Budget data) {

        Budget budget = afficher(id);

        budget.setAnnee(data.getAnnee());
        budget.setMontantPrevu(data.getMontantPrevu());
        budget.setMontantRealise(data.getMontantRealise());
        budget.setNoteOrientation(data.getNoteOrientation());

        return budgetRepository.save(budget);
    }

    public void supprimer(Long id) {
        budgetRepository.deleteById(id);
    }

    public List<Budget> mesBudgets(
            Authentication authentication) {

        String email = authentication.getName();

        Administratif administratif =
                administratifRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("Administratif introuvable"));

        return budgetRepository.findByAdministratifId(
                administratif.getId());
    }
}
