import { PartenaireService } from '@/app/services/partenaire';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-partenaires-administratif',
  imports: [CommonModule, FormsModule,],
  templateUrl: './liste-partenaires-administratif.html',
  styleUrl: './liste-partenaires-administratif.css',
})
export class ListePartenairesAdministratif implements OnInit {

  partenaires: any[] = [];

  openForm = false;
  openView = false;
  isEdit = false;

  partenaire: any = {
    nom: '',
    typePartenaire: '',
    domaine: '',
    email: '',
    telephone: '',
    adresse: '',
    pays: '',
    actif: true,
    description: ''
  };

  constructor(
    private partenaireService: PartenaireService
  ) {}

  ngOnInit(): void {

    this.loadPartenaires();

  }

  loadPartenaires() {

    this.partenaireService.getAll().subscribe({

      next: (res: any) => {

        this.partenaires = res;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  nouveau() {

    this.isEdit = false;

    this.partenaire = {
      nom: '',
      typePartenaire: '',
      domaine: '',
      email: '',
      telephone: '',
      adresse: '',
      pays: '',
      actif: true,
      description: ''
    };

    this.openForm = true;

  }

  modifier(p: any) {

    this.isEdit = true;

    this.partenaire = { ...p };

    this.openForm = true;

  }

  voir(p: any) {

    this.partenaire = { ...p };

    this.openView = true;

  }

  enregistrer() {

    if (this.isEdit) {

      this.partenaireService
        .modifier(this.partenaire.id, this.partenaire)
        .subscribe({

          next: () => {

            alert('Partenaire modifié avec succès');

            this.openForm = false;

            this.loadPartenaires();

          }

        });

    } else {

      this.partenaireService
        .ajouter(this.partenaire)
        .subscribe({

          next: () => {

            alert('Partenaire ajouté avec succès');

            this.openForm = false;

            this.loadPartenaires();

          }

        });

    }

  }

  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce partenaire ?')) {

      this.partenaireService.supprimer(id)
        .subscribe({

          next: () => {

            alert('Partenaire supprimé');

            this.loadPartenaires();

          }

        });

    }

  }

}