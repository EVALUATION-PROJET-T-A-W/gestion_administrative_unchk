import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '@/app/services/utilisateur';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './utilisateur.html',
  styleUrl: './utilisateur.css',
})
export class Utilisateur implements OnInit {

  typeUtilisateur: string = 'etudiant';

  utilisateurs: any[] = []; // ✅ FIX 1

  utilisateur: any = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    telephone: '',
    photo: null
  };

  photoFile!: File;

  constructor(private service: UtilisateurService) {}

  // ✅ FIX 2
  ngOnInit() {
    this.lister();
  }

  onFileSelected(event: any) {
    this.photoFile = event.target.files[0];
  }

  enregistrer() {

    const formData = new FormData();

    formData.append('nom', this.utilisateur.nom);
    formData.append('prenom', this.utilisateur.prenom);
    formData.append('email', this.utilisateur.email);
    formData.append('motDePasse', this.utilisateur.motDePasse);
    formData.append('telephone', this.utilisateur.telephone);

    if (this.photoFile) {
      formData.append('photo', this.photoFile);
    }

    if (this.typeUtilisateur === 'etudiant') {
      this.service.inscrireEtudiant(formData).subscribe(() => this.lister());
    }

    if (this.typeUtilisateur === 'formateur') {
      this.service.inscrireFormateur(formData).subscribe(() => this.lister());
    }

    if (this.typeUtilisateur === 'administratif') {
      this.service.inscrireAdministratif(formData).subscribe(() => this.lister());
    }

    this.reset();
  }

  lister() {
    this.service.getAll().subscribe(data => {
      console.log('DATA BACKEND:', data);
      this.utilisateurs = data;
    });
  }

  reset() {
    this.utilisateur = {
      nom: '',
      prenom: '',
      email: '',
      motDePasse: '',
      telephone: '',
      photo: null
    };

    this.photoFile = null!;
  }
}
