package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Formation;

public interface FormationRepository extends JpaRepository<Formation, Long> {

}
