import { CoursService } from '@/app/services/coursService';
import { FormationService } from '@/app/services/formationService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cours-administratif',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cours-administratif.html',
  styleUrl: './cours-administratif.css',
})
export class CoursAdministratif implements OnInit {

  cours: any[] = [];
  formations: any[] = [];

  openForm = false;
  openView = false;
  isEdit = false;

  selectedFile!: File;

  cour: any = {
    id: null,
    titre: '',
    description: '',
    dateCours: '',
    supportCours: '',
    formationId: null
  };

  constructor(
    private coursService: CoursService,
    private formationService: FormationService
  ) { }

  ngOnInit(): void {

    this.loadCours();

    this.formationService.getAll().subscribe({
      next: (res: any) => {
        this.formations = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  loadCours() {

    this.coursService.getAll().subscribe({

      next: (res: any) => {

        this.cours = res;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  resetForm() {

    this.cour = {
      id: null,
      titre: '',
      description: '',
      dateCours: '',
      supportCours: '',
      formationId: null
    };

  }

  nouveau() {

    this.isEdit = false;

    this.resetForm();

    this.openForm = true;

  }

  modifier(c: any) {

    this.isEdit = true;

    this.cour = {

      ...c,

      formationId: c.formation?.id

    };

    this.openForm = true;

  }

  voir(c: any) {

    this.cour = { ...c };

    this.openView = true;

  }

  fermerFormulaire() {

    this.openForm = false;

  }

  fermerDetails() {

    this.openView = false;

  }

  onFileSelected(event: any) {

    const file = event.target.files[0];

    if (file) {

      this.selectedFile = file;

      this.cour.supportCours = file.name;

    }

  }

  enregistrer() {

    if (this.isEdit) {

      this.coursService
        .modifier(this.cour.id, this.cour)
        .subscribe({

          next: () => {

            alert('Cours modifié avec succès');

            this.openForm = false;

            this.loadCours();

          },

          error: (err) => {

            console.error(err);

          }

        });

    }

    else {

      this.coursService
        .ajouter(this.cour)
        .subscribe({

          next: () => {

            alert('Cours ajouté avec succès');

            this.openForm = false;

            this.loadCours();

          },

          error: (err) => {

            console.error(err);

          }

        });

    }

  }

  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce cours ?')) {

      this.coursService
        .supprimer(id)
        .subscribe({

          next: () => {

            alert('Cours supprimé avec succès');

            this.loadCours();

          },

          error: (err) => {

            console.error(err);

          }

        });

    }

  }

}