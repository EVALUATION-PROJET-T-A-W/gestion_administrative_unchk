package sn.uchk.universite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sn.uchk.universite.entity.Document;

public interface DocumentRepository  extends JpaRepository<Document, Long> {
}
