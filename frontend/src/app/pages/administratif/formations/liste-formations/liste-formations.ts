
import { Formation } from '@/app/services/formation';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-formations',
  imports: [CommonModule,FormsModule],
  templateUrl: './liste-formations.html',
  styleUrl: './liste-formations.css',
})
export class ListeFormations {
  formations: any[] = [];

  formationId = '';

  constructor(
    private formation: Formation
  ) {}

  ngOnInit() {
    this.chargerFormations();
  }

  chargerFormations() {
    this.formation
      .getFormations()
      .subscribe({
        next: (data) => {
          this.formations = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}