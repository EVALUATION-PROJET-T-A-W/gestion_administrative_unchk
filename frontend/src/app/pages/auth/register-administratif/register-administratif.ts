// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
//
//
// @Component({
//   selector: 'app-register-administratif',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './register-administratif.html',
//   styleUrl: './register-administratif.css',
// })
// export class RegisterAdministratif {
//
//   administratif = {
//     nom: '',
//     prenom: '',
//     email: '',
//     motDePasse: '',
//     telephone: '',
//     fonction: ''
//   };
//
//   photoFile: File | null = null;
//
//   constructor(private service: UtilisateurService) {}
//
//   onFileSelected(event: any) {
//     this.photoFile = event.target.files[0];
//   }
//
//   enregistrer() {
//
//     const formData = new FormData();
//
//     formData.append('nom', this.administratif.nom);
//     formData.append('prenom', this.administratif.prenom);
//     formData.append('email', this.administratif.email);
//     formData.append('motDePasse', this.administratif.motDePasse);
//     formData.append('telephone', this.administratif.telephone);
//     formData.append('fonction', this.administratif.fonction);
//
//     if (this.photoFile) {
//       formData.append('photo', this.photoFile);
//     }
//
//     this.service.inscrireAdministratif(formData).subscribe({
//       next: () => {
//         alert('Administratif enregistré avec succès');
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
//     this.administratif = {
//       nom: '',
//       prenom: '',
//       email: '',
//       motDePasse: '',
//       telephone: '',
//       fonction: ''
//     };
//
//     this.photoFile = null;
//   }
// }
