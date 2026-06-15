import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-emplois-du-temps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-emplois-du-temps.html',
  styleUrl: './mes-emplois-du-temps.css',
})
export class MesEmploisDuTemps implements OnInit {

  emplois: any[] = [];

  ngOnInit(): void {

    // Exemple temporaire
    this.emplois = [
      {
        jour: 'Lundi',
        heureDebut: '08:00',
        heureFin: '10:00',
        salle: 'A101',
        module: 'Programmation Java'
      },
      {
        jour: 'Mardi',
        heureDebut: '10:00',
        heureFin: '12:00',
        salle: 'B203',
        module: 'Angular'
      },
      {
        jour: 'Jeudi',
        heureDebut: '14:00',
        heureFin: '16:00',
        salle: 'C105',
        module: 'Base de données'
      }
    ];

  }

}
