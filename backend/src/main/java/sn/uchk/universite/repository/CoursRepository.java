package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Cours;

import java.util.List;

public interface CoursRepository extends JpaRepository<Cours, Long> {
    List<Cours> findByFormation_IdIn(List<Long> formationIds);
    List<Cours> findByFormation_Id(Long formationId);
}
