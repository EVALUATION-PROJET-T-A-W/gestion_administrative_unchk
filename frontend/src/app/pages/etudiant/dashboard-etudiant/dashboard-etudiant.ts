import { Auth } from '@/app/services/auth';
import { Etudiant } from '@/app/services/etudiant';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-etudiant',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './dashboard-etudiant.html',
  styleUrl: './dashboard-etudiant.css',
})
export class DashboardEtudiant {
  dashboard: any;
  profil: any;
  constructor(
    private Service: Etudiant,
    private auth: Auth
  ) {}

  ngOnInit(): void {

    this.Service.getDashboard()
      .subscribe({
        next: (data) => {
          this.dashboard = data;
        },
        error: (err) => {
          console.error(err);
        }
      });

      this.auth.getProfil().subscribe({
        next: (data) => {
          this.profil = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
 






  
}
