package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Etudiant;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {

}
