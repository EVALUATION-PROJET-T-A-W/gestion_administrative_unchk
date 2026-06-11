package sn.uchk.universite.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sn.uchk.universite.entity.Document;
import sn.uchk.universite.service.DocumentService;

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
            @RequestBody Document document) {

        return documentService.modifier(id, document);
    }

    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable Long id) {
        documentService.supprimer(id);
    }
}