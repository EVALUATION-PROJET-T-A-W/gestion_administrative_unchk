import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ajouter-document',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-document.html',
  styleUrl: './ajouter-document.css',
})
export class AjouterDocument {

  document = {
    titre: '',
    typeDocument: '',
    description: '',
    datePublication: '',
    administratifId: null
  };

  fichier!: File;

  onFileChange(event: any) {
    this.fichier = event.target.files[0];
  }

  ajouter() {

    const formData = new FormData();

    formData.append('titre', this.document.titre);
    formData.append('typeDocument', this.document.typeDocument);
    formData.append('description', this.document.description);
    formData.append('datePublication', this.document.datePublication);
    formData.append('administratifId', String(this.document.administratifId));

    if (this.fichier) {
      formData.append('fichier', this.fichier);
    }

    console.log('Document prêt à envoyer', formData);

    alert('Document prêt (à connecter backend)');
  }
}
