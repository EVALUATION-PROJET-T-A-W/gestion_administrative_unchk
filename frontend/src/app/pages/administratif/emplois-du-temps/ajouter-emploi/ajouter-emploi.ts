import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmploiDuTempsService } from '@/app/services/emploi-du-temps';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ajouter-emploi',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-emploi.html',
  styleUrl: './ajouter-emploi.css',
})
export class AjouterEmploi {

  emploi = {
    jour: '',
    heureDebut: '',
    heureFin: '',
    salle: '',
    module: '',
    formationId: null
  };

  constructor(private service: EmploiDuTempsService) {}

  ajouter() {
    this.service.create(this.emploi).subscribe(() => {
      alert('Emploi ajouté avec succès');
      this.reset();
    });
  }

  reset() {
    this.emploi = {
      jour: '',
      heureDebut: '',
      heureFin: '',
      salle: '',
      module: '',
      formationId: null
    };
  }
}
