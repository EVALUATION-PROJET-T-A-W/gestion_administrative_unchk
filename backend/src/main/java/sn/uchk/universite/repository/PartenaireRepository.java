package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Partenaire;


public interface PartenaireRepository extends JpaRepository<Partenaire, Long> {
}
