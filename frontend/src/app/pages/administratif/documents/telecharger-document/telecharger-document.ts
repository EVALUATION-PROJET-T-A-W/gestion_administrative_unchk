import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-telecharger-document',
  standalone: true,
  templateUrl: './telecharger-document.html',
  styleUrl: './telecharger-document.css',
})
export class TelechargerDocument {

  @Input() fichierUrl!: string;

  telecharger() {
    window.open(this.fichierUrl, '_blank');
  }
}
