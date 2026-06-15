import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PartenaireService } from '@/app/services/partenaire';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ajouter-partenaire',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-partenaire.html',
  styleUrl: './ajouter-partenaire.css',
})
export class AjouterPartenaire {

  partenaire = {
    nom: '',
    type: '',
    contact: '',
    email: ''
  };

  constructor(private service: PartenaireService) {}

  ajouter() {
    this.service.create(this.partenaire).subscribe(() => {
      alert('Partenaire ajouté');
      this.reset();
    });
  }

  reset() {
    this.partenaire = {
      nom: '',
      type: '',
      contact: '',
      email: ''
    };
  }
}
