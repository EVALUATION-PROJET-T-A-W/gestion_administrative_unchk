package sn.uchk.universite.service;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import sn.uchk.universite.entity.Administratif;
import sn.uchk.universite.entity.Document;
import sn.uchk.universite.repository.AdministratifRepository;
import sn.uchk.universite.repository.DocumentRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class DocumentService {

    private final DocumentRepository documentRepository;
    private final AdministratifRepository administratifRepository;

    public DocumentService(
            DocumentRepository documentRepository,
            AdministratifRepository administratifRepository) {

        this.documentRepository = documentRepository;
        this.administratifRepository = administratifRepository;
    }

    public Document ajouter(
            String titre,
            String typeDocument,
            String description,
            MultipartFile fichier,
            Authentication authentication) throws IOException {

        String email = authentication.getName();

        Administratif administratif =
                administratifRepository.findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("Administratif introuvable"));

        String dossierUpload = "uploads/documents/";

        Files.createDirectories(Paths.get(dossierUpload));

        String nomFichier =
                UUID.randomUUID() + "_" +
                        fichier.getOriginalFilename();

        Path chemin =
                Paths.get(dossierUpload + nomFichier);

        Files.copy(
                fichier.getInputStream(),
                chemin
        );

        Document document = new Document();

        document.setTitre(titre);
        document.setTypeDocument(typeDocument);
        document.setDescription(description);
        document.setDatePublication(LocalDate.now());
        document.setFichier(nomFichier);
        document.setAdministratif(administratif);

        return documentRepository.save(document);
    }

    public List<Document> lister() {
        return documentRepository.findAll();
    }

    public Document afficher(Long id) {
        return documentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Document introuvable"));
    }

    public Document modifier(Long id, Document data) {

        Document document = afficher(id);

        document.setTitre(data.getTitre());
        document.setTypeDocument(data.getTypeDocument());
        document.setDescription(data.getDescription());

        return documentRepository.save(document);
    }

    public void supprimer(Long id) {
        documentRepository.deleteById(id);
    }
}