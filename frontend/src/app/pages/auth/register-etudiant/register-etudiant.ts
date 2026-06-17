import { Inscription } from '@/app/services/inscription';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListeFormations } from '../../administratif/formations/liste-formations/liste-formations';
import { CommonModule } from '@angular/common';
import { Formation } from '@/app/services/formation';
import { Home } from '../../home/home';

@Component({
  selector: 'app-register-etudiant',
  imports: [FormsModule,RouterOutlet,CommonModule, RouterLink,ListeFormations,Home],
  templateUrl: './register-etudiant.html',
  styleUrl: './register-etudiant.css',
})
export class RegisterEtudiant {

  nom = '';
  prenom = '';
  email = '';
  motDePasse = '';
  telephone = '';
  ine = '';
  promotion = '';
  anneeDebut = '';
  anneeSortie = '';
  formationId = '';

  photo!: File;
  router: any;

  constructor(
    private inscription: Inscription,
    private formation: Formation
  ) {}
  formations: any[] = [];

  ngOnInit() {
    this.chargerFormations();
  }
  onFileSelected(event: any) {
    this.photo = event.target.files[0];
  }

  inscrireEtudiant(form: NgForm) {

    const formData = new FormData();


    formData.append('nom', this.nom);
    formData.append('prenom', this.prenom);
    formData.append('email', this.email);
    formData.append('motDePasse', this.motDePasse);
    formData.append('telephone', this.telephone);
    formData.append('ine', this.ine);
    formData.append('promotion', this.promotion);
    formData.append('anneeDebut', this.anneeDebut);
    formData.append('anneeSortie', this.anneeSortie);
    formData.append('formationId', this.formationId);

    if (this.photo) {
      formData.append('photo', this.photo);
    }

    this.inscription
    .inscrireEtudiant(formData)
    .subscribe({
      next: () => {

        alert('Inscription réussie');

        form.resetForm();
        this.router.navigate(['/home']);
      },

      error: (err) => {
        console.error(err);
      }
    });
}

  

  chargerFormations() {
    this.formation
      .getFormations()
      .subscribe({
        next: (data) => {
          this.formations = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
