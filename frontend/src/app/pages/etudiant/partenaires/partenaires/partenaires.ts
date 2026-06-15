import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partenaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partenaires.html',
  styleUrl: './partenaires.css',
})
export class Partenaires implements OnInit {

  partenaires: any[] = [];

  ngOnInit(): void {

    // Données temporaires
    this.partenaires = [
      {
        id: 1,
        nom: 'Sonatel',
        secteur: 'Télécommunications',
        email: 'contact@sonatel.sn',
        telephone: '771234567'
      },
      {
        id: 2,
        nom: 'Orange Digital Center',
        secteur: 'Formation numérique',
        email: 'contact@odc.sn',
        telephone: '781112233'
      },
      {
        id: 3,
        nom: 'Gainde 2000',
        secteur: 'Informatique',
        email: 'contact@gainde2000.sn',
        telephone: '776667788'
      }
    ];

  }

}
