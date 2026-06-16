package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Cours;

public interface CoursRepository extends JpaRepository<Cours, Long> {
}
