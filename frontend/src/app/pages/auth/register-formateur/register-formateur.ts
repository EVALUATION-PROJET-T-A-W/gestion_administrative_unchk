import { Inscription } from '@/app/services/inscription';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from '../../home/home';

@Component({
  selector: 'app-register-formateur',
  imports: [FormsModule,RouterOutlet, RouterLink,Home],
  templateUrl: './register-formateur.html',
  styleUrl: './register-formateur.css',
})
export class RegisterFormateur {
  nom = '';
  prenom = '';
  email = '';
  motDePasse = '';
  telephone = '';
  
  specialite = '';
  grade = '';
  departement = '';
  typeFormateur = '';
  
  photo!: File;
  router: any;
  constructor(
    private inscription: Inscription
  ) {}


  onFileSelected(event: any) {
    this.photo = event.target.files[0];
  }
  
  inscrireFormateur(form: NgForm) {

    const formData = new FormData();
  
    formData.append('nom', this.nom);
    formData.append('prenom', this.prenom);
    formData.append('email', this.email);
    formData.append('motDePasse', this.motDePasse);
    formData.append('telephone', this.telephone);
  
    formData.append('specialite', this.specialite);
    formData.append('grade', this.grade);
    formData.append('departement', this.departement);
    formData.append('typeFormateur', this.typeFormateur);
  
    if (this.photo) {
      formData.append('photo', this.photo);
    }
  
    this.inscription
        .inscrireFormateur(formData)
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
}