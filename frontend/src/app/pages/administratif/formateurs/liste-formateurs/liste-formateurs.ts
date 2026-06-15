import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/services/formateur';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-liste-formateurs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-formateurs.html',
  styleUrl: './liste-formateurs.css',
})
export class ListeFormateurs implements OnInit {

  formateurs: any[] = [];

  constructor(private service: FormateurService) {}

  ngOnInit() {
    this.lister();
  }

  lister() {
    this.service.getAll().subscribe(data => {
      this.formateurs = data;
    });
  }

  supprimer(id: number) {
    this.service.delete(id).subscribe(() => {
      this.lister();
    });
  }
}
