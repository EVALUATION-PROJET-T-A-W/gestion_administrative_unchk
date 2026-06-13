import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { FormationService } from '@/app/services/formation';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe
  ],
  templateUrl: './formation.html',
  styleUrl: './formation.css',
})
export class Formation implements OnInit {

  formations: any[] = [];

  formation: any = {
    id: null,
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

  modeEdition = false;

  constructor(
    private formationService: FormationService
  ) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.formationService.getAll()
      .subscribe(data => {
        this.formations = data;
      });
  }

  // AJOUT + MODIFICATION
  enregistrer() {

    if (this.modeEdition) {

      this.formationService
        .update(this.formation.id, this.formation)
        .subscribe(() => {
          this.lister();
          this.resetForm();
        });

    } else {

      this.formationService
        .create(this.formation)
        .subscribe(() => {
          this.lister();
          this.resetForm();
        });
    }
  }

  // MODIFIER
  modifier(formation: any) {
    this.formation = { ...formation };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cette formation ?')) {

      this.formationService
        .delete(id)
        .subscribe(() => {
          this.lister();
        });
    }
  }

  // RESET FORM
  resetForm() {
    this.formation = {
      id: null,
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

    this.modeEdition = false;
  }
}
