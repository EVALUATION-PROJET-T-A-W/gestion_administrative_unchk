import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-etudiant',
  standalone: true,
  templateUrl: './detail-etudiant.html',
  styleUrl: './detail-etudiant.css',
})
export class DetailEtudiant {

  @Input() etudiant: any;
}
