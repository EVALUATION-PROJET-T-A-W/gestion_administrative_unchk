import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploiDuTempsService } from '@/app/services/emploi-du-temps';

@Component({
  selector: 'app-liste-emplois',
  standalone: true,
  imports: [CommonModule, CommonModule],
  templateUrl: './liste-emplois.html',
  styleUrl: './liste-emplois.css',
})
export class ListeEmplois implements OnInit {

  emplois: any[] = [];

  constructor(private service: EmploiDuTempsService) {}

  ngOnInit() {
    this.lister();
  }

  lister() {
    this.service.getAll().subscribe(data => {
      this.emplois = data;
    });
  }

  supprimer(id: number) {
    if (confirm('Voulez-vous supprimer cet emploi ?')) {
      this.service.delete(id).subscribe(() => {
        this.lister();
      });
    }
  }
}
