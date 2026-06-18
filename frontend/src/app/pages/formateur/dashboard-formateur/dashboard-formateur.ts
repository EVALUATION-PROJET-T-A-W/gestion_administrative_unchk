
import { Formateur } from '@/app/services/formateur';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-formateur',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './dashboard-formateur.html',
  styleUrl: './dashboard-formateur.css',
})
export class DashboardFormateur implements OnInit {

  dashboard: any;

  constructor(private formateur: Formateur) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.formateur.getDashboard().subscribe({
      next: (data) => {
        console.log("Dashboard :", data);
        this.dashboard = data;
      },
      error: (err) => {
        console.error("Erreur dashboard :", err);
      }
    });
  }
}