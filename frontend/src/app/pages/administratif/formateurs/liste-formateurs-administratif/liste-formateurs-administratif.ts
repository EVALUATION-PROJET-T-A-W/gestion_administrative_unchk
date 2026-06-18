import { FormateurService } from '@/app/services/formateurService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-formateurs-administratif',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './liste-formateurs-administratif.html',
  styleUrl: './liste-formateurs-administratif.css',
})
export class ListeFormateursAdministratif implements OnInit {

  formateurs: any[] = [];
  selectedFormateur: any = null;

  showDetailModal = false;
  showEditModal = false;
  constructor(
    private formateurService: FormateurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerFormateurs();
  }
  chargerFormateurs() {

    this.formateurService.lister()
      .subscribe({
        next: (data: any) => {
          this.formateurs = data;
        }
      });
  
  }
  
  voirDetail(formateur: any) {
  
    this.selectedFormateur = { ...formateur };
  
    this.showDetailModal = true;
  
  }
  
  modifier(formateur: any) {
  
    this.selectedFormateur = { ...formateur };
  
    this.showEditModal = true;
  
  }
  
  fermerModal() {
  
    this.showDetailModal = false;
    this.showEditModal = false;
    this.selectedFormateur = null;
  
  }
  
  enregistrerModification() {
  
    this.formateurService
        .modifier(
          this.selectedFormateur.id,
          this.selectedFormateur
        )
        .subscribe({
  
          next: () => {
  
            alert('Formateur modifié avec succès');
  
            this.chargerFormateurs();
  
            this.fermerModal();
  
          }
  
        });
  
  }
  
  supprimer(id: number) {
  
    if(confirm('Supprimer ce formateur ?')) {
  
      this.formateurService
          .supprimer(id)
          .subscribe({
  
            next: () => {
  
              this.chargerFormateurs();
  
            }
  
          });
  
    }
  
  }
}
