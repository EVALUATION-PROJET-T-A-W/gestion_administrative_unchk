import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modifier-etudiant',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-etudiant.html',
  styleUrl: './modifier-etudiant.css',
})
export class ModifierEtudiant {

  @Input() etudiant: any;

  constructor(private service: EtudiantService) {}

  modifier() {
    this.service.update(this.etudiant.id, this.etudiant)
      .subscribe(() => {
        alert('Étudiant modifié');
      });
  }
}
