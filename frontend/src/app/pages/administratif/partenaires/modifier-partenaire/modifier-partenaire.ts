import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PartenaireService } from '@/app/services/partenaire';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modifier-partenaire',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-partenaire.html',
  styleUrl: './modifier-partenaire.css',
})
export class ModifierPartenaire {

  @Input() partenaire: any;

  constructor(private service: PartenaireService) {}

  modifier() {
    this.service.update(this.partenaire.id, this.partenaire)
      .subscribe(() => {
        alert('Partenaire modifié');
      });
  }
}
