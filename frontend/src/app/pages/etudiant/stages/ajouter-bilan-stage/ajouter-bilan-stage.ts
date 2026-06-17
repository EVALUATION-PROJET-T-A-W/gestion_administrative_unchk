import { Stage } from '@/app/services/stage';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-ajouter-bilan-stage',
  standalone: true,
  imports: [FormsModule,RouterOutlet,CommonModule,RouterLink],
  templateUrl: './ajouter-bilan-stage.html',
  styleUrl: './ajouter-bilan-stage.css',
})
export class AjouterBilanStage {

  entreprise = '';
  dateDebut = '';
  dateFin = '';
  bilan = '';
  statut = '';
  etudiantId='';
  

  constructor(
    private stage: Stage,
    private router: Router
  ) {}

  ajouterStage(form: NgForm) {

    const stage = {
  
      entreprise: this.entreprise,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      bilan: this.bilan,
      statut: this.statut
  
    };
  
    this.stage
      .ajouter(stage)
      .subscribe({
  
        next: () => {
  
          alert('Stage ajouté avec succès');
  
          form.resetForm();
          this.router.navigate(['/dashboardEtudiant/stages']);
        },
  
        error: (err) => {
  
          console.error(err);
  
        }
  
      });
  }
}