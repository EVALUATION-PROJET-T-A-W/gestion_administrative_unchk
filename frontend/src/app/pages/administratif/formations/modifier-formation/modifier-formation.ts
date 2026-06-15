import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormationService } from '@/app/services/formation';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modifier-formation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-formation.html',
  styleUrl: './modifier-formation.css',
})
export class ModifierFormation {

  @Input() formation: any;

  constructor(private service: FormationService) {}

  modifier() {
    this.service.update(this.formation.id, this.formation)
      .subscribe(() => {
        alert('Formation modifiée avec succès');
      });
  }
}
