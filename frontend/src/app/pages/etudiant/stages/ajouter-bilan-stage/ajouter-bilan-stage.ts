import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-bilan-stage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-bilan-stage.html',
  styleUrl: './ajouter-bilan-stage.css',
})
export class AjouterBilanStage {

  bilanStage = {
    entreprise: '',
    dateDebut: '',
    dateFin: '',
    bilan: '',
    statut: '',
    etudiantId: null
  };

  enregistrer() {

    console.log(this.bilanStage);

    alert('Bilan de stage enregistré avec succès');

    this.reset();
  }

  reset() {
    this.bilanStage = {
      entreprise: '',
      dateDebut: '',
      dateFin: '',
      bilan: '',
      statut: '',
      etudiantId: null
    };
  }

}
