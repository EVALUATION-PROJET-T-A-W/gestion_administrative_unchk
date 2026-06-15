import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-formation',
  standalone: true,
  templateUrl: './detail-formation.html',
  styleUrl: './detail-formation.css',
})
export class DetailFormation {

  @Input() formation: any;
}
