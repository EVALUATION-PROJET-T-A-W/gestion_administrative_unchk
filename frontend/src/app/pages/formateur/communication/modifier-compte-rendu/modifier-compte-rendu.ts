import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-compte-rendu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifier-compte-rendu.html',
  styleUrl: './modifier-compte-rendu.css',
})
export class ModifierCompteRendu {

  @Input() compteRendu: any = {
    id: null,
    titre: '',
    contenu: '',
    date: '',
    stageId: null
  };

  modifier() {
    console.log('Modification:', this.compteRendu);
    alert('Compte rendu modifié avec succès');
  }

}
