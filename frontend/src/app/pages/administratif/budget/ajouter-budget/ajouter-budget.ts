import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BudgetService} from '@/app/services/budget';

@Component({
  selector: 'app-ajouter-budget',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './ajouter-budget.html',
  styleUrl: './ajouter-budget.css',
})
export class AjouterBudget {

  budget = {
    annee: null,
    montantPrevu: null,
    montantRealise: null,
    noteOrientation: '',
    administratifId: null
  };

  constructor(private service: BudgetService) {}

  enregistrer() {
    this.service.create(this.budget).subscribe(() => {
      alert('Budget ajouté');
      this.reset();
    });
  }

  reset() {
    this.budget = {
      annee: null,
      montantPrevu: null,
      montantRealise: null,
      noteOrientation: '',
      administratifId: null
    };
  }

}
