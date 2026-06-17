import { Auth } from '@/app/services/auth';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil-formateur',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './profil-formateur.html',
  styleUrl: './profil-formateur.css',
})
export class ProfilFormateur implements OnInit {

  nom = '';
  prenom = '';
  email = '';
  telephone = '';
  specialite = '';
  grade = '';
  departement = '';
  typeFormateur = '';
  photo = '';

  profil: any = {};

  selectedFile: File | null = null;

  message = '';

  constructor(
    private auth: Auth
  ) {}

  ngOnInit(): void {

    this.chargerProfil();
  }

  chargerProfil(): void {

    this.auth.getProfil().subscribe({

      next: (data: any) => {

        console.log('Profil :', data);

        this.profil = data;

        this.nom = data.nom || '';
        this.prenom = data.prenom || '';
        this.email = data.email || '';
        this.telephone = data.telephone || '';
        this.specialite = data.specialite || '';
        this.grade = data.grade || '';
        this.departement = data.departement || '';
        this.typeFormateur = data.typeFormateur || '';
        this.photo = data.photo || '';
      },

      error: (err) => {

        console.error(err);
      }
    });
  }

  onFileSelected(event: any): void {

    const file = event.target.files?.[0];

    if (file) {

      this.selectedFile = file;
    }
  }

  modifierProfil(): void {

    const formData = new FormData();

    formData.append('nom', this.nom);
    formData.append('prenom', this.prenom);
    formData.append('telephone', this.telephone);
    formData.append('specialite', this.specialite);
    formData.append('grade', this.grade);
    formData.append('departement', this.departement);
formData.append('typeFormateur', this.typeFormateur);

    if (this.selectedFile) {

      formData.append(
        'photo',
        this.selectedFile
      );
    }

    this.auth
      .modifierProfil(formData)
      .subscribe({

        next: (response) => {

          this.message =
            'Profil modifié avec succès';

          console.log(response);

          this.chargerProfil();
        },

        error: (err) => {

          console.error(err);

          this.message =
            'Erreur lors de la modification';
        }
      });
  }
}