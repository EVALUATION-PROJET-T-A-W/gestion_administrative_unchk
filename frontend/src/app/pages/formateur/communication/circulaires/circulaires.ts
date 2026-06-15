import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circulaires.html',
  styleUrl: './circulaires.css',
})
export class Circulaires implements OnInit {

  circulaires: any[] = [];

  ngOnInit(): void {

    // données temporaires
    this.circulaires = [
      {
        id: 1,
        titre: 'Reprise des cours',
        contenu: 'Les cours reprennent le 20 juin 2026.',
        date: '2026-06-10'
      },
      {
        id: 2,
        titre: 'Examen session 1',
        contenu: 'Les examens commencent le 5 juillet 2026.',
        date: '2026-06-12'
      },
      {
        id: 3,
        titre: 'Stage obligatoire',
        contenu: 'Tous les étudiants doivent valider un stage de 2 mois.',
        date: '2026-06-14'
      }
    ];

  }

}
