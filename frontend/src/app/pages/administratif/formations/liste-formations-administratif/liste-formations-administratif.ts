import { FormationService } from '@/app/services/formationService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-formations-administratif',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './liste-formations-administratif.html',
  styleUrl: './liste-formations-administratif.css',
})
export class ListeFormationsAdministratif implements OnInit {

  formations: any[] = [];

  openForm = false;
  openView = false;
  isEdit = false;

  formation: any = {
    nomFormation: '',
    typeFormation: '',
    niveau: '',
    dateDebut: '',
    dateFin: '',
    montant: 0,
    typeFinancement: '',
    nombreHomme: 0,
    nombreFemme: 0,
    description: ''
  };

  constructor(
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations() {

    this.formationService.getAll().subscribe({

      next: (res: any) => {

        this.formations = res;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  nouveau() {

    this.isEdit = false;

    this.formation = {
      nomFormation: '',
      typeFormation: '',
      niveau: '',
      dateDebut: '',
      dateFin: '',
      montant: 0,
      typeFinancement: '',
      nombreHomme: 0,
      nombreFemme: 0,
      description: ''
    };

    this.openForm = true;

  }

  modifier(f: any) {

    this.isEdit = true;

    this.formation = { ...f };

    this.openForm = true;

  }

  voir(f: any) {

    this.formation = { ...f };

    this.openView = true;

  }

  fermerFormulaire() {

    this.openForm = false;

  }

  fermerDetails() {

    this.openView = false;

  }

  enregistrer() {

    if (this.isEdit) {

      this.formationService
        .modifier(this.formation.id, this.formation)
        .subscribe({

          next: () => {

            alert('Formation modifiée avec succès');

            this.openForm = false;

            this.loadFormations();

          },

          error: (err) => {

            console.error(err);

          }

        });

    } else {

      this.formationService
        .ajouter(this.formation)
        .subscribe({

          next: () => {

            alert('Formation ajoutée avec succès');

            this.openForm = false;

            this.loadFormations();

          },

          error: (err) => {

            console.error(err);

          }

        });

    }

  }

  supprimer(id: number) {

    if (confirm('Voulez-vous vraiment supprimer cette formation ?')) {

      this.formationService
        .supprimer(id)
        .subscribe({

          next: () => {

            alert('Formation supprimée avec succès');

            this.loadFormations();

          },

          error: (err) => {

            console.error(err);

          }

        });

    }

  }

}