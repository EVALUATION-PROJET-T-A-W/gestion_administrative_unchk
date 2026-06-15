import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormationService } from '@/app/services/formation';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ajouter-formation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-formation.html',
  styleUrl: './ajouter-formation.css',
})
export class AjouterFormation {

  formation = {
    nomFormation: '',
    typeFormation: '',
    niveau: '',
    dateDebut: '',
    dateFin: '',
    montant: null,
    typeFinancement: '',
    nombreHomme: null,
    nombreFemme: null,
    description: ''
  };

  constructor(private service: FormationService) {}

  ajouter() {
    this.service.create(this.formation).subscribe(() => {
      alert('Formation ajoutée');
      this.reset();
    });
  }

  reset() {
    this.formation = {
      nomFormation: '',
      typeFormation: '',
      niveau: '',
      dateDebut: '',
      dateFin: '',
      montant: null,
      typeFinancement: '',
      nombreHomme: null,
      nombreFemme: null,
      description: ''
    };
  }
}
