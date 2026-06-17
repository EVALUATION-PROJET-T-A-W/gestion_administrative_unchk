import { Reunion } from '@/app/services/reunion';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunions-formateur',
  imports: [CommonModule],
  templateUrl: './reunions-formateur.html',
  styleUrl: './reunions-formateur.css',
})
export class ReunionsFormateur implements OnInit {

  reunions: any[] = [];

  constructor(private reunion: Reunion) {}

  ngOnInit(): void {
    this.chargerReunions();
  }

  chargerReunions() {
    this.reunion.lister().subscribe({
      next: (data: any) => {
        this.reunions = data;
      },
      error: (err) => {
        console.error('Erreur chargement réunions:', err);
      }
    });
  }
}