import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiants-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiants-formation.html',
  styleUrl: './etudiants-formation.css',
})
export class EtudiantsFormation implements OnInit {

  etudiants: any[] = [];

  formation = {
    id: 1,
    nom: 'Licence Informatique'
  };

  ngOnInit(): void {

    // données simulées
    this.etudiants = [
      {
        id: 1,
        nom: 'Diop',
        prenom: 'Aminata',
        ine: 'INE001',
        promotion: '2024'
      },
      {
        id: 2,
        nom: 'Sow',
        prenom: 'Ibrahima',
        ine: 'INE002',
        promotion: '2024'
      },
      {
        id: 3,
        nom: 'Ndiaye',
        prenom: 'Fatou',
        ine: 'INE003',
        promotion: '2023'
      }
    ];

  }

}
