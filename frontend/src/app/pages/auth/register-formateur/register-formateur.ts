// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import {FormateurService} from '@/app/services/formateur';
//
// @Component({
//   selector: 'app-register-formateur',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './register-formateur.html',
//   styleUrl: './register-formateur.css',
// })
// export class RegisterFormateur {
//
//   formateur = {
//     nom: '',
//     prenom: '',
//     email: '',
//     motDePasse: '',
//     telephone: '',
//     specialite: '',
//     grade: '',
//     departement: '',
//     typeFormateur: ''
//   };
//
//   photoFile: File | null = null;
//
//   constructor(private service: FormateurService) {}
//
//   onFileSelected(event: any) {
//     this.photoFile = event.target.files[0];
//   }
//
//   enregistrer() {
//
//     const formData = new FormData();
//
//     formData.append('nom', this.formateur.nom);
//     formData.append('prenom', this.formateur.prenom);
//     formData.append('email', this.formateur.email);
//     formData.append('motDePasse', this.formateur.motDePasse);
//     formData.append('telephone', this.formateur.telephone);
//
//     formData.append('specialite', this.formateur.specialite);
//     formData.append('grade', this.formateur.grade);
//     formData.append('departement', this.formateur.departement);
//     formData.append('typeFormateur', this.formateur.typeFormateur);
//
//     if (this.photoFile) {
//       formData.append('photo', this.photoFile);
//     }
//
//     this.service.inscrireFormateur(formData).subscribe({
//       next: () => {
//         alert('Formateur enregistré avec succès');
//         this.reset();
//       },
//       error: (err) => {
//         console.log(err);
//         alert('Erreur lors de l’enregistrement');
//       }
//     });
//   }
//
//   reset() {
//     this.formateur = {
//       nom: '',
//       prenom: '',
//       email: '',
//       motDePasse: '',
//       telephone: '',
//       specialite: '',
//       grade: '',
//       departement: '',
//       typeFormateur: ''
//     };
//
//     this.photoFile = null;
//   }
// }
