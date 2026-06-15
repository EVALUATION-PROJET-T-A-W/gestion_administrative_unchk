import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-compte-rendu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-compte-rendu.html',
  styleUrl: './ajouter-compte-rendu.css',
})
export class AjouterCompteRendu {

  compteRendu = {
    titre: '',
    contenu: '',
    date: '',
    stageId: null
  };

  enregistrer() {
    console.log(this.compteRendu);
    alert('Compte rendu ajouté avec succès');
    this.reset();
  }

  reset() {
    this.compteRendu = {
      titre: '',
      contenu: '',
      date: '',
      stageId: null
    };
  }
}
