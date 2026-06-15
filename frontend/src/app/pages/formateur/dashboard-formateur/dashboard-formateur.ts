import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-formateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-formateur.html',
  styleUrl: './dashboard-formateur.css',
})
export class DashboardFormateur implements OnInit {

  totalFormations = 0;
  totalEtudiants = 0;
  totalStages = 0;
  notifications: any[] = [];

  ngOnInit(): void {

    // données simulées (à remplacer par API)
    this.totalFormations = 5;
    this.totalEtudiants = 120;
    this.totalStages = 35;

    this.notifications = [
      {
        id: 1,
        message: 'Nouvelle inscription en formation Angular',
        date: '2026-06-10'
      },
      {
        id: 2,
        message: 'Un étudiant a soumis un compte rendu',
        date: '2026-06-12'
      }
    ];

  }

}
