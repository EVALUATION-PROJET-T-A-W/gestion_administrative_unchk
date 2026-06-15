import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-formateur',
  standalone: true,
  templateUrl: './detail-formateur.html',
  styleUrl: './detail-formateur.css',
})
export class DetailFormateur {

  @Input() formateur: any;
}
