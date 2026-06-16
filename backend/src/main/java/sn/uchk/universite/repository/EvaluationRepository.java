package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Evaluation;

public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
}
