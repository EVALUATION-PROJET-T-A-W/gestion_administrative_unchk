import { EtudiantService } from '@/app/services/etudiantService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-etudiants-administratif',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './liste-etudiants-administratif.html',
  styleUrl: './liste-etudiants-administratif.css',
})
export class ListeEtudiantsAdministratif implements OnInit {

  etudiants: any[] = [];

  constructor(
    private etudiantService: EtudiantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerEtudiants();
  }

  chargerEtudiants() {
    this.etudiantService.getAll().subscribe({
      next: (data: any) => {
        this.etudiants = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  supprimer(id: number) {

    if (confirm('Voulez-vous vraiment supprimer cet étudiant ?')) {

      this.etudiantService.supprimer(id).subscribe({
        next: () => {
          this.chargerEtudiants();
          
        },
        error: (err) => {
          console.error(err);
        }
      });

    }

  }


  selectedEtudiant: any = null;

showDetailModal = false;
showEditModal = false;

voirDetail(etudiant: any) {
  this.selectedEtudiant = { ...etudiant };
  this.showDetailModal = true;
}

modifier(etudiant: any) {
  this.selectedEtudiant = { ...etudiant };
  this.showEditModal = true;
}

fermerModal() {
  this.showDetailModal = false;
  this.showEditModal = false;
  this.selectedEtudiant = null;
}

enregistrerModification() {

  this.etudiantService.update(
    this.selectedEtudiant.id,
    this.selectedEtudiant
  ).subscribe({

    next: () => {

      alert('Étudiant modifié avec succès');

      this.chargerEtudiants();

      this.fermerModal();

    },

    error: (err) => {

      console.error(err);

    }

  });

}
}