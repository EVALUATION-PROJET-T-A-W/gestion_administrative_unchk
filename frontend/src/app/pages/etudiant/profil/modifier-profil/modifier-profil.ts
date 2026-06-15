import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifier-profil.html',
  styleUrl: './modifier-profil.css',
})
export class ModifierProfil {

  utilisateur = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    photo: ''
  };

  enregistrer() {
    console.log(this.utilisateur);
    alert('Profil modifié avec succès');
  }

}
