import {Component, OnInit} from '@angular/core';
import {BudgetService} from '@/app/services/budget';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-budget',
  imports: [
    FormsModule
  ],
  templateUrl: './budget.html',
  styleUrl: './budget.css',
})
export class Budget implements OnInit {

  budgets: any[] = [];

  budget: any = {
    id: null,
    annee: null,
    montantPrevu: null,
    montantRealise: null,
    noteOrientation: '',
    administratifId: null
  };

  modeEdition = false;

  constructor(private service: BudgetService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.budgets = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.budget.id, this.budget)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.budget)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(b: any) {
    this.budget = { ...b };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce budget ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.budget = {
      id: null,
      annee: null,
      montantPrevu: null,
      montantRealise: null,
      noteOrientation: '',
      administratifId: null
    };

    this.modeEdition = false;
  }

}
