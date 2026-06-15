import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmploiDuTempsService } from '@/app/services/emploi-du-temps';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modifier-emploi',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-emploi.html',
  styleUrl: './modifier-emploi.css',
})
export class ModifierEmploi {

  @Input() emploi: any;

  constructor(private service: EmploiDuTempsService) {}

  modifier() {
    this.service.update(this.emploi.id, this.emploi)
      .subscribe(() => {
        alert('Emploi modifié');
      });
  }
}
