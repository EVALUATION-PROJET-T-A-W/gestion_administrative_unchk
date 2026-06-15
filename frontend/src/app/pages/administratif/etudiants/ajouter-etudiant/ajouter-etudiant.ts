import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-ajouter-etudiant',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ajouter-etudiant.html',
  styleUrl: './ajouter-etudiant.css',
})
export class AjouterEtudiant {

  etudiant = {
    ine: '',
    promotion: '',
    anneeDebut: '',
    anneeSortie: '',
    formationId: null
  };

  constructor(private service: EtudiantService) {}

  ajouter() {
    this.service.create(this.etudiant).subscribe(() => {
      alert('Étudiant ajouté');
      this.reset();
    });
  }

  reset() {
    this.etudiant = {
      ine: '',
      promotion: '',
      anneeDebut: '',
      anneeSortie: '',
      formationId: null
    };
  }
}
