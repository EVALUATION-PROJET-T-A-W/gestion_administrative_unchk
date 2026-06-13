import {Component, OnInit} from '@angular/core';
import {DocumentService} from '@/app/services/document';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-document',
  imports: [
    FormsModule
  ],
  templateUrl: './document.html',
  styleUrl: './document.css',
})
export class Document implements OnInit {

  documents: any[] = [];

  document: any = {
    id: null,
    titre: '',
    typeDocument: '',
    fichier: '',
    datePublication: '',
    description: '',
    administrationId: null
  };

  modeEdition = false;

  constructor(private service: DocumentService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.documents = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.document.id, this.document)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.document)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(d: any) {
    this.document = { ...d };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce document ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.document = {
      id: null,
      titre: '',
      typeDocument: '',
      fichier: '',
      datePublication: '',
      description: '',
      administrationId: null
    };

    this.modeEdition = false;
  }
}
