import { CoursService } from '@/app/services/coursService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  imports: [CommonModule],
  templateUrl: './cours.html',
  styleUrl: './cours.css',
})

  export class MesCoursComponent implements OnInit {

    cours: any[] = [];
    loading = true;
  
    constructor(private coursService: CoursService) {}
  
    ngOnInit(): void {
      this.loadCours();
    }
  
    loadCours(): void {
      this.loading = true;
  
      this.coursService.getMesCours().subscribe({
        next: (data: any) => {
          console.log('Cours reçus :', data);
  
          this.cours = data || [];
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur cours :', err);
          this.loading = false;
        }
      });
    }
  }