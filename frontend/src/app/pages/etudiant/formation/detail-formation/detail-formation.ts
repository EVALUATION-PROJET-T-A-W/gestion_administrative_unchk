import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-formation.html',
  styleUrl: './detail-formation.css',
})
export class DetailFormation {

  @Input() formation: any = {
    nomFormation: 'Développement Web',
    typeFormation: 'Certifiante',
    niveau: 'Licence',
    dateDebut: '2026-01-15',
    dateFin: '2026-06-30',
    montant: 250000,
    typeFinancement: 'État',
    nombreHomme: 20,
    nombreFemme: 15,
    description: 'Formation complète en développement Web avec Spring Boot et Angular.'
  };

}
