import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-reunion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-reunion.html',
  styleUrl: './ajouter-reunion.css',
})
export class AjouterReunion {

  reunion = {
    titre: '',
    date: '',
    heure: '',
    lieu: '',
    ordreDuJour: ''
  };

  enregistrer() {
    console.log(this.reunion);
    alert('Réunion ajoutée avec succès');
    this.reset();
  }

  reset() {
    this.reunion = {
      titre: '',
      date: '',
      heure: '',
      lieu: '',
      ordreDuJour: ''
    };
  }

}
