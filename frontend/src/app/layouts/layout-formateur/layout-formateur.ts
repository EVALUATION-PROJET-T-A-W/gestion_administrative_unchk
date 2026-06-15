import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-formateur',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-formateur.html',
  styleUrl: './layout-formateur.css',
})
export class LayoutFormateur {}
