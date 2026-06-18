import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '@/app/services/dashboardService';

@Component({
  selector: 'app-dashboard-administratif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-administratif.html',
  styleUrl: './dashboard-administratif.css',
})
export class DashboardAdministratif implements OnInit {


  stats = {
    nombreEtudiants: 0,
    nombreFormateurs: 0,
    nombreFormations: 0,
    nombreStages: 0,
    nombreReunions: 0,
    nombreDocuments: 0
  };

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats() {
    this.dashboardService.getStats().subscribe({
      next: (res: any) => {
        this.stats = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  exportPdf() {
    this.dashboardService.exportPdf();
  }

  exportExcel() {
    this.dashboardService.exportExcel();
  }
}

