import { Stage } from '@/app/services/stage';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ajouter-bilan-stage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-bilan-stage.html',
  styleUrl: './ajouter-bilan-stage.css',
})
export class AjouterBilanStage {

  entreprise = '';
  dateDebut = '';
  dateFin = '';
  bilan = '';
  statut = '';

  constructor(
    private stage: Stage
  ) {}

  ajouterStage() {

    const stage = {

      entreprise: this.entreprise,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      bilan: this.bilan,
      statut: this.statut

    };

    const etudiantId = Number(
      localStorage.getItem('id')
    );

    this.stage
      .ajouter(stage, etudiantId)
      .subscribe({

        next: () => {

          alert('Stage ajouté avec succès');

          this.entreprise = '';
          this.dateDebut = '';
          this.dateFin = '';
          this.bilan = '';
          this.statut = '';

        },

        error: (err) => {

          console.error(err);

        }

      });
  }
}