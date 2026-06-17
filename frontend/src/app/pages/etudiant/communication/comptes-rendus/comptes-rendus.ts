import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Rapport } from '@/app/services/rapport';

@Component({
  selector: 'app-comptes-rendus',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './comptes-rendus.html',

  styleUrl: './comptes-rendus.css',
})
export class ComptesRendus implements OnInit {

  rapports: any[] = [];

  errorMessage = '';

  constructor(
    private rapportService: Rapport
  ) {}

  ngOnInit(): void {

    this.chargerRapports();
  }

  chargerRapports(): void {

    this.rapportService
      .lister()
      .subscribe({

        next: (data: any[]) => {

          console.log(data);

          this.rapports = data;
        },

        error: (err) => {

          console.error(err);

          this.errorMessage =
            'Erreur lors du chargement des rapports';
        }
      });
  }
}