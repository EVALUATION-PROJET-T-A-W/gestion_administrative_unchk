import { Rapport } from '@/app/services/rapport';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptes-rendus-administratif',
  imports: [CommonModule],
  templateUrl: './comptes-rendus-administratif.html',
  styleUrl: './comptes-rendus-administratif.css',
})
export class ComptesRendusAdministratif implements OnInit {

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