import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-comptes-rendus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-comptes-rendus.html',
  styleUrl: './mes-comptes-rendus.css',
})
export class MesComptesRendus implements OnInit {

  comptesRendus: any[] = [];

  ngOnInit(): void {

    // données temporaires
    this.comptesRendus = [
      {
        id: 1,
        titre: 'Semaine 1',
        contenu: 'Installation et découverte de l’environnement de travail.',
        date: '2026-01-10'
      },
      {
        id: 2,
        titre: 'Semaine 2',
        contenu: 'Développement des premières fonctionnalités Angular.',
        date: '2026-01-17'
      },
      {
        id: 3,
        titre: 'Semaine 3',
        contenu: 'Intégration API Spring Boot.',
        date: '2026-01-24'
      }
    ];

  }

}
