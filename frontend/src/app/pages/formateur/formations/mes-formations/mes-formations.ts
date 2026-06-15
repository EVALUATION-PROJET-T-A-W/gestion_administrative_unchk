import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-formations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-formations.html',
  styleUrl: './mes-formations.css',
})
export class MesFormations implements OnInit {

  formations: any[] = [];

  ngOnInit(): void {

    // Données temporaires
    this.formations = [
      {
        id: 1,
        nomFormation: 'Développement Web',
        niveau: 'Licence',
        typeFormation: 'Présentiel',
        dateDebut: '2026-01-15',
        dateFin: '2026-06-30'
      },
      {
        id: 2,
        nomFormation: 'Angular Avancé',
        niveau: 'Master',
        typeFormation: 'Hybride',
        dateDebut: '2026-02-01',
        dateFin: '2026-07-15'
      }
    ];

  }

}
