import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageService } from '@/app/services/stage';

@Component({
  selector: 'app-liste-stages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-stages.html',
  styleUrl: './liste-stages.css',
})
export class ListeStages implements OnInit {

  stages: any[] = [];

  constructor(private service: StageService) {}

  ngOnInit(): void {
    this.lister();
  }

  lister(): void {
    this.service.getAll().subscribe(data => {
      this.stages = data;
    });
  }

  supprimer(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.lister();
    });
  }
}
