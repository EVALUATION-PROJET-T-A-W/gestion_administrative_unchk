import {Component, OnInit} from '@angular/core';
import { EvaluationService } from '@/app/services/evaluation';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-evaluation',
  imports: [
    FormsModule
  ],
  templateUrl: './evaluation.html',
  styleUrl: './evaluation.css',
})
export class Evaluation implements OnInit {

  evaluations: any[] = [];

  evaluation: any = {
    id: null,
    typeEvaluation: '',
    dateEvaluation: '',
    note: null,
    coefficient: null,
    coursId: null
  };

  modeEdition = false;

  constructor(private service: EvaluationService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.evaluations = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.evaluation.id, this.evaluation)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.evaluation)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(e: any) {
    this.evaluation = { ...e };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cette évaluation ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.evaluation = {
      id: null,
      typeEvaluation: '',
      dateEvaluation: '',
      note: null,
      coefficient: null,
      coursId: null
    };

    this.modeEdition = false;
  }

}
