package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Administratif;

import java.util.Optional;

public interface AdministratifRepository extends JpaRepository<Administratif, Long> {
    Optional<Administratif> findByEmail(String email);
}
