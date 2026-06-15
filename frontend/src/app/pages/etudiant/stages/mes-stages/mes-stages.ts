import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-stages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-stages.html',
  styleUrl: './mes-stages.css',
})
export class MesStages implements OnInit {

  stages: any[] = [];

  ngOnInit(): void {

    // données temporaires (à remplacer par API)
    this.stages = [
      {
        id: 1,
        entreprise: 'Sonatel',
        dateDebut: '2026-01-10',
        dateFin: '2026-03-10',
        statut: 'EN_COURS',
        bilan: 'Stage en développement web'
      },
      {
        id: 2,
        entreprise: 'Orange Digital Center',
        dateDebut: '2025-06-01',
        dateFin: '2025-08-01',
        statut: 'TERMINE',
        bilan: 'Stage en formation Angular'
      }
    ];

  }

}
