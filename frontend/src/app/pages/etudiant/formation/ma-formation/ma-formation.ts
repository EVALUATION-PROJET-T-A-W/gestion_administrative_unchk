import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ma-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ma-formation.html',
  styleUrl: './ma-formation.css',
})
export class MaFormation implements OnInit {

  formation: any;

  ngOnInit(): void {

    // Exemple temporaire
    this.formation = {
      nomFormation: 'Développement Web',
      typeFormation: 'Certifiante',
      niveau: 'Licence',
      dateDebut: '2026-01-15',
      dateFin: '2026-06-30',
      montant: 250000,
      typeFinancement: 'État',
      nombreHomme: 20,
      nombreFemme: 15,
      description: 'Formation en Spring Boot, Angular et MySQL.'
    };

  }

}
