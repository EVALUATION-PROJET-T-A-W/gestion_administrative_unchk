import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mon-emploi-du-temps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mon-emploi-du-temps.html',
  styleUrl: './mon-emploi-du-temps.css',
})
export class MonEmploiDuTemps implements OnInit {

  emplois: any[] = [];

  ngOnInit(): void {

    // données temporaires
    this.emplois = [
      {
        jour: 'Lundi',
        heureDebut: '08:00',
        heureFin: '10:00',
        module: 'Angular',
        salle: 'A101'
      },
      {
        jour: 'Mardi',
        heureDebut: '10:00',
        heureFin: '12:00',
        module: 'Spring Boot',
        salle: 'B202'
      },
      {
        jour: 'Jeudi',
        heureDebut: '14:00',
        heureFin: '16:00',
        module: 'Base de données',
        salle: 'C303'
      }
    ];

  }

}
