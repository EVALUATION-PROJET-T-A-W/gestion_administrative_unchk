import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-liste-etudiants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-etudiants.html',
  styleUrl: './liste-etudiants.css',
})
export class ListeEtudiants implements OnInit {

  etudiants: any[] = [];

  constructor(private service: EtudiantService) {}

  ngOnInit() {
    this.lister();
  }

  lister() {
    this.service.getAll().subscribe(data => {
      this.etudiants = data;
    });
  }

  supprimer(id: number) {
    this.service.delete(id).subscribe(() => {
      this.lister();
    });
  }
}
