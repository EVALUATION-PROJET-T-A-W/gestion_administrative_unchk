// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import {EtudiantService} from '@/app/services/etudiant';
//
// @Component({
//   selector: 'app-register-etudiant',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './register-etudiant.html',
//   styleUrl: './register-etudiant.css',
// })
// export class RegisterEtudiant {
//
//   etudiant = {
//     nom: '',
//     prenom: '',
//     email: '',
//     motDePasse: '',
//     telephone: '',
//     ine: '',
//     promotion: '',
//     anneeDebut: '',
//     anneeSortie: '',
//     formationId: null
//   };
//
//   photoFile: File | null = null;
//
//   constructor(private service: EtudiantService) {}
//
//   onFileSelected(event: any) {
//     this.photoFile = event.target.files[0];
//   }
//
//   enregistrer() {
//
//     const formData = new FormData();
//
//     formData.append('nom', this.etudiant.nom);
//     formData.append('prenom', this.etudiant.prenom);
//     formData.append('email', this.etudiant.email);
//     formData.append('motDePasse', this.etudiant.motDePasse);
//     formData.append('telephone', this.etudiant.telephone);
//
//     formData.append('ine', this.etudiant.ine);
//     formData.append('promotion', this.etudiant.promotion);
//     formData.append('anneeDebut', this.etudiant.anneeDebut);
//     formData.append('anneeSortie', this.etudiant.anneeSortie);
//
//     if (this.etudiant.formationId) {
//       formData.append('formationId', this.etudiant.formationId);
//     }
//
//     if (this.photoFile) {
//       formData.append('photo', this.photoFile);
//     }
//
//     this.service.inscrireEtudiant(formData).subscribe({
//       next: () => {
//         alert('Étudiant enregistré avec succès');
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
//     this.etudiant = {
//       nom: '',
//       prenom: '',
//       email: '',
//       motDePasse: '',
//       telephone: '',
//       ine: '',
//       promotion: '',
//       anneeDebut: '',
//       anneeSortie: '',
//       formationId: null
//     };
//
//     this.photoFile = null;
//   }
// }
