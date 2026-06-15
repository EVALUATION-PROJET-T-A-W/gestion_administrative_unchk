package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Stage;

import java.util.List;

public interface StageRepository extends JpaRepository<Stage , Long> {
    List<Stage> findByEtudiantId(Long etudiantId);
    List<Stage> findByEtudiantEmail(String email);
}
