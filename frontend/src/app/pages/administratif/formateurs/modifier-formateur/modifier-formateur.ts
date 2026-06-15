import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormateurService } from 'src/app/services/formateur';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modifier-formateur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-formateur.html',
  styleUrl: './modifier-formateur.css',
})
export class ModifierFormateur {

  @Input() formateur: any;

  constructor(private service: FormateurService) {}

  modifier() {
    this.service.update(this.formateur.id, this.formateur)
      .subscribe(() => {
        alert('Formateur modifié');
      });
  }
}
