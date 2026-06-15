import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartenaireService } from '@/app/services/partenaire';

@Component({
  selector: 'app-liste-partenaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-partenaires.html',
  styleUrl: './liste-partenaires.css',
})
export class ListePartenaires implements OnInit {

  partenaires: any[] = [];

  constructor(private service: PartenaireService) {}

  ngOnInit(): void {
    this.lister();
  }

  lister(): void {
    this.service.getAll().subscribe(data => {
      this.partenaires = data;
    });
  }

  supprimer(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.lister();
    });
  }
}
