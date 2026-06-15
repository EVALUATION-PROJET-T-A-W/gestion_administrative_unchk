import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-etudiant',
  standalone: true,
  templateUrl: './dashboard-etudiant.html',
  styleUrl: './dashboard-etudiant.css',
})
export class DashboardEtudiant {

  nombreCours = 8;
  nombreDocuments = 15;
  nombreStages = 2;
  nombreNotifications = 5;

}
