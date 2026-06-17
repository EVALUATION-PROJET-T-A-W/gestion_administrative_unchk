import { Formateur } from '@/app/services/formateur';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emploi-du-temps-formateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emploi-du-temps-formateur.html',
  styleUrl: './emploi-du-temps-formateur.css',
})
export class EmploiDuTempsFormateur implements OnInit {

  emplois: any[] = [];

  constructor(private formateur: Formateur) {}

  ngOnInit(): void {

    this.formateur.mesEmplois().subscribe({
      next: (data: any) => {
        this.emplois = data;
        console.log("EMPLOIS:", data);
      },
      error: (err) => {
        console.error("ERREUR API:", err);
      }
    });
  }
}