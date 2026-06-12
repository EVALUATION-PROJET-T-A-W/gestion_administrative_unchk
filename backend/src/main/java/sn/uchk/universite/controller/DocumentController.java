package sn.uchk.universite.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sn.uchk.universite.entity.Document;
import sn.uchk.universite.service.DocumentService;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin("*")
public class DocumentController {

    private final DocumentService documentService;

    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @PostMapping
    public ResponseEntity<Document> ajouter(
            @RequestParam String titre,
            @RequestParam String typeDocument,
            @RequestParam String description,
            @RequestParam MultipartFile fichier,
            Authentication authentication) throws IOException {

        return ResponseEntity.ok(
                documentService.ajouter(
                        titre,
                        typeDocument,
                        description,
                        fichier,
                        authentication));
    }
    @GetMapping
    public List<Document> lister() {
        return documentService.lister();
    }

    @GetMapping("/{id}")
    public Document afficher(@PathVariable Long id) {
        return documentService.afficher(id);
    }

    @PutMapping("/{id}")
    public Document modifier(
            @PathVariable Long id,
            @RequestParam String titre,
            @RequestParam String typeDocument,
            @RequestParam String description,
            @RequestParam(required = false) MultipartFile fichier)
            throws IOException {

        return documentService.modifier(
                id,
                titre,
                typeDocument,
                description,
                fichier
        );
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        documentService.supprimer(id);
    }

    @GetMapping("/telecharger/{id}")
    public ResponseEntity<Resource> telecharger(
            @PathVariable Long id) throws IOException {

        Document document = documentService.telecharger(id);

        Path path = Paths.get("uploads/documents/")
                .resolve(document.getFichier());

        Resource resource = new UrlResource(path.toUri());

        if (!resource.exists()) {
            throw new RuntimeException(
                    "Fichier introuvable : " + path.toAbsolutePath());
        }

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + document.getFichier() + "\"")
                .body(resource);
    }
}