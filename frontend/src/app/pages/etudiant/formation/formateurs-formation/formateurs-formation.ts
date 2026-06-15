import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formateurs-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formateurs-formation.html',
  styleUrl: './formateurs-formation.css',
})
export class FormateursFormation implements OnInit {

  formateurs: any[] = [];

  ngOnInit(): void {

    // Données de démonstration
    this.formateurs = [
      {
        nom: 'Diop',
        prenom: 'Moussa',
        specialite: 'Développement Web',
        grade: 'Ingénieur',
        departement: 'Informatique',
        typeFormateur: 'INTERNE'
      },
      {
        nom: 'Ndiaye',
        prenom: 'Fatou',
        specialite: 'Base de données',
        grade: 'Master',
        departement: 'Informatique',
        typeFormateur: 'EXTERNE'
      }
    ];

  }

}
