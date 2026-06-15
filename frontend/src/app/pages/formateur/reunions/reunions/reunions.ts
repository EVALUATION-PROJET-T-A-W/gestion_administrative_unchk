import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReunionService } from '@/app/services/reunion';

@Component({
  selector: 'app-reunions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reunions.html',
  styleUrl: './reunions.css',
})
export class Reunions implements OnInit {

  reunions: any[] = [];

  constructor(private reunionService: ReunionService) {}

  ngOnInit(): void {
    this.chargerReunions();
  }

  chargerReunions() {
    this.reunionService.getAll().subscribe(data => {
      this.reunions = data;
    });
  }

  supprimer(id: number) {
    this.reunionService.delete(id).subscribe(() => {
      this.chargerReunions();
    });
  }

}
