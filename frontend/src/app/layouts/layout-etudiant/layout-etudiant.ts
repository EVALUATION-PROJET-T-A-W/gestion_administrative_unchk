import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-etudiant',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-etudiant.html',
  styleUrl: './layout-etudiant.css',
})
export class LayoutEtudiant {

}
