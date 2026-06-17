import { Rapport } from '@/app/services/rapport';

import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comptes-rendus',

  standalone: true,

  imports: [
    FormsModule,
    CommonModule
  ],

  templateUrl: './comptes-rendus.html',

  styleUrl: './comptes-rendus.css',
})
export class ComptesRendus {

  titre = '';

  contenu = '';

  reunionId!: number;

  message = '';

  errorMessage = '';

  constructor(
    private rapport: Rapport
  ) {}

  publier() {

    const rapportData = {

      titre: this.titre,

      contenu: this.contenu
    };

    this.rapport
      .publier(
        this.reunionId,
        rapportData
      )
      .subscribe({

        next: () => {

          this.message =
            'Rapport publié avec succès';

          this.errorMessage = '';

          this.titre = '';

          this.contenu = '';
        },

        error: (err) => {

          console.error(err);

          this.errorMessage =
            'Erreur lors de la publication';
        }
      });
  }
}