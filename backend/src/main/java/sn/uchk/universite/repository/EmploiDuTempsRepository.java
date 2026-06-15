package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.EmploiDuTemps;

import java.util.List;

public interface EmploiDuTempsRepository extends JpaRepository<EmploiDuTemps, Long> {
     List<EmploiDuTemps> findByFormationId(Long formationId);
}
