import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormateurService } from 'src/app/services/formateur';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ajouter-formateur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-formateur.html',
  styleUrl: './ajouter-formateur.css',
})
export class AjouterFormateur {

  formateur = {
    specialite: '',
    grade: '',
    departement: '',
    typeFormateur: ''
  };

  constructor(private service: FormateurService) {}

  ajouter() {
    this.service.create(this.formateur).subscribe(() => {
      alert('Formateur ajouté');
      this.reset();
    });
  }

  reset() {
    this.formateur = {
      specialite: '',
      grade: '',
      departement: '',
      typeFormateur: ''
    };
  }
}
