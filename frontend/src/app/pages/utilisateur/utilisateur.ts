import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from '@/app/services/utilisateur';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  imports: [
    FormsModule
  ],
  templateUrl: './utilisateur.html',
  styleUrl: './utilisateur.css',
})
export class Utilisateur implements OnInit {

  utilisateurs: any[] = [];

  utilisateur: any = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    telephone: '',
    photo: ''
  };

  modeEdition = false;

  constructor(private service: UtilisateurService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.utilisateurs = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.utilisateur.id, this.utilisateur)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.utilisateur)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(u: any) {
    this.utilisateur = { ...u };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cet utilisateur ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.utilisateur = {
      id: null,
      nom: '',
      prenom: '',
      email: '',
      motDePasse: '',
      telephone: '',
      photo: ''
    };

    this.modeEdition = false;
  }

}
