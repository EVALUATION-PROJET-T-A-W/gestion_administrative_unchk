package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Reunion;

import java.util.List;

public interface ReunionRepository extends JpaRepository<Reunion, Long> {

    List<Reunion> findByFormationId(Long formationId);
}