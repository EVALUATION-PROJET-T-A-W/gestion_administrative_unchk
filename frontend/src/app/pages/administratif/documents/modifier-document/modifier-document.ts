import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-modifier-document',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modifier-document.html',
  styleUrl: './modifier-document.css',
})
export class ModifierDocument {

  @Input() document: any;

  modifier() {
    alert('Document modifié : ' + this.document.titre);
  }
}
