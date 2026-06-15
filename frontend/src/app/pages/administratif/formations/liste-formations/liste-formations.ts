import { Component, OnInit } from '@angular/core';
import { FormationService } from '@/app/services/formation';

import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-liste-formations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-formations.html',
  styleUrl: './liste-formations.css',
})
export class ListeFormations implements OnInit {

  formations: any[] = [];

  constructor(private service: FormationService) {}

  ngOnInit() {
    this.lister();
  }

  lister() {
    this.service.getAll().subscribe(data => {
      this.formations = data;
    });
  }

  supprimer(id: number) {
    this.service.delete(id).subscribe(() => {
      this.lister();
    });
  }
}
