package sn.uchk.universite.service;

import org.springframework.stereotype.Service;
import sn.uchk.universite.entity.Cours;
import sn.uchk.universite.entity.Evaluation;
import sn.uchk.universite.repository.CoursRepository;
import sn.uchk.universite.repository.EvaluationRepository;

import java.util.List;

@Service
public class EvaluationService {
    private final EvaluationRepository evaluationRepository;
    private final CoursRepository coursRepository;

    public EvaluationService(EvaluationRepository evaluationRepository, CoursRepository coursRepository) {
        this.evaluationRepository = evaluationRepository;
        this.coursRepository = coursRepository;
    }

    public Evaluation ajouter(Evaluation evaluation, Long coursId) {
        Cours cours = coursRepository.findById(coursId)
                .orElseThrow(() -> new IllegalArgumentException("Cours n'existe pas"));

        evaluation.setCours(cours);
        return evaluationRepository.save(evaluation);
    }

    public List<Evaluation> lister() {
        return evaluationRepository.findAll();
    }

    public Evaluation modifier(Long id, Evaluation evaluation) {
        Evaluation evaluation1 = evaluationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Evaluation n'existe pas"));

        evaluation1.setTypeEvaluation(evaluation.getTypeEvaluation());
        evaluation1.setDateEvaluation(evaluation.getDateEvaluation());
        evaluation1.setNote(evaluation.getNote());
        evaluation1.setCoefficient(evaluation.getCoefficient());
        evaluation1.setCours(evaluation.getCours());
        return evaluationRepository.save(evaluation1);
    }

    public void supprimer(Long id) {
        if(!evaluationRepository.existsById(id)){
            throw new IllegalArgumentException("Le evaluation n'existe pas");
        }
        evaluationRepository.deleteById(id);
    }
}
