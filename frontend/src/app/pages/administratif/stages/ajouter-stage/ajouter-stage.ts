import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StageService } from '@/app/services/stage';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ajouter-stage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-stage.html',
  styleUrl: './ajouter-stage.css',
})
export class AjouterStage {

  stage = {
    entreprise: '',
    dateDebut: '',
    dateFin: '',
    bilan: '',
    statut: '',
    etudiantId: null
  };

  constructor(private service: StageService) {}

  ajouter() {
    this.service.create(this.stage).subscribe(() => {
      alert('Stage ajouté');
      this.reset();
    });
  }

  reset() {
    this.stage = {
      entreprise: '',
      dateDebut: '',
      dateFin: '',
      bilan: '',
      statut: '',
      etudiantId: null
    };
  }
}
