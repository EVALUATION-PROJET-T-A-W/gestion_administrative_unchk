import { Formateur } from '@/app/services/formateur';
import { Profil } from '@/app/services/profil';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-formations-formateur',
  imports: [CommonModule],
  templateUrl: './mes-formations-formateur.html',
  styleUrl: './mes-formations-formateur.css',
})
export class MesFormationsFormateur implements OnInit {

  formations: any[] = [];

  constructor(private formateur: Formateur) {}

  ngOnInit(): void {
    this.chargerFormations();
  }

  chargerFormations(): void {
    this.formateur.getMesFormations().subscribe({
      next: (data) => {
        console.log('Formations reçues :', data);
        this.formations = data;
      },
      error: (err) => {
        console.error('Erreur :', err);
      }
    });
  }
}