import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormateurService } from '@/app/services/formateur';

@Component({
  selector: 'app-formateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formateur.html',
  styleUrl: './formateur.css',
})
export class Formateur implements OnInit {

  formateurs: any[] = [];

  formateur: any = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motDePasse: '',
    specialite: '',
    grade: '',
    departement: '',
    photo: '',
    typeFormateur: ''
  };

  modeEdition = false;

  constructor(private formateurService: FormateurService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.formateurService.getAll()
      .subscribe((data: any[]) => {
        this.formateurs = data;
      });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.formateurService.update(this.formateur.id, this.formateur)
        .subscribe(() => {
          this.lister();
          this.resetForm();
        });

    } else {

      this.formateurService.create(this.formateur)
        .subscribe(() => {
          this.lister();
          this.resetForm();
        });

    }
  }

  // MODIFIER
  modifier(formateur: any) {
    this.formateur = { ...formateur };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce formateur ?')) {

      this.formateurService.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  resetForm() {
    this.formateur = {
      id: null,
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      motDePasse: '',
      specialite: '',
      grade: '',
      departement: '',
      photo: '',
      typeFormateur: ''
    };

    this.modeEdition = false;
  }
}
