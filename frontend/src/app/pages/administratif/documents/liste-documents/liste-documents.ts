import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-liste-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-documents.html',
  styleUrl: './liste-documents.css',
})
export class ListeDocuments implements OnInit {

  documents: any[] = [];

  ngOnInit() {
    this.documents = [
      { id: 1, titre: 'Rapport stage', type: 'PDF' },
      { id: 2, titre: 'Cours Angular', type: 'DOC' }
    ];
  }

  supprimer(id: number) {
    this.documents = this.documents.filter(d => d.id !== id);
  }
}
