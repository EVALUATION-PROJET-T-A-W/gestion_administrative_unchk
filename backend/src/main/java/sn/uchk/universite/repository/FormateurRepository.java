package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Formateur;

public interface FormateurRepository extends JpaRepository<Formateur, Long> {
}
