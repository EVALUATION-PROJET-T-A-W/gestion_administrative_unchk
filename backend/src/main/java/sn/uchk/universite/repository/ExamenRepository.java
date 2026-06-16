package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Examen;

public interface ExamenRepository extends JpaRepository<Examen, Long> {
}
