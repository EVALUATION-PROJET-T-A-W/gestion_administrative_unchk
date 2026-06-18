import { DocumentService } from '@/app/services/documentService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-documents-administratif',
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-documents-administratif.html',
  styleUrl: './liste-documents-administratif.css',
})
export class ListeDocumentsAdministratif implements OnInit {

    documents: any[] = [];
  
    openForm = false;
    openView = false;
    isEdit = false;
  
    document: any = {
      id: null,
      titre: '',
      typeDocument: '',
      description: '',
      fichier: null
    };
  
    constructor(private documentService: DocumentService) {}
  
    ngOnInit(): void {
      this.loadDocuments();
    }
  
    loadDocuments() {
      this.documentService.getAll().subscribe({
        next: (res: any) => this.documents = res
      });
    }
  
    nouveau() {
  
      this.isEdit = false;
  
      this.document = {
        titre: '',
        typeDocument: '',
        description: '',
        fichier: null
      };
  
      this.openForm = true;
  
    }
  
    modifier(doc: any) {
  
      this.isEdit = true;
  
      this.document = {...doc};
  
      this.openForm = true;
  
    }
  
    voir(doc: any) {
  
      this.document = {...doc};
  
      this.openView = true;
  
    }
  
    onFileSelected(event: any) {
  
      this.document.fichier = event.target.files[0];
  
    }
  
    enregistrer() {
  
      const formData = new FormData();
  
      formData.append('titre', this.document.titre);
      formData.append('typeDocument', this.document.typeDocument);
      formData.append('description', this.document.description);
  
      if (this.document.fichier) {
        formData.append('fichier', this.document.fichier);
      }
  
      if (this.isEdit) {
  
        this.documentService.modifier(this.document.id, formData)
        .subscribe(() => {
  
          this.openForm = false;
          this.loadDocuments();
  
        });
  
      } else {
  
        this.documentService.ajouter(formData)
        .subscribe(() => {
  
          this.openForm = false;
          this.loadDocuments();
  
        });
  
      }
  
    }
  
    supprimer(id:number){
  
      if(confirm("Supprimer ce document ?")){
  
        this.documentService.supprimer(id)
        .subscribe(() => this.loadDocuments());
  
      }
  
    }
  
    telecharger(id:number){
  
      this.documentService.telecharger(id);
  
    }
  
  }

