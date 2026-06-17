import { Stage } from '@/app/services/stage';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AjouterBilanStage } from '../ajouter-bilan-stage/ajouter-bilan-stage';

@Component({
  selector: 'app-mes-stages',
  imports: [CommonModule, FormsModule,RouterOutlet, RouterLink,AjouterBilanStage],
  templateUrl: './mes-stages.html',
  styleUrl: './mes-stages.css',
})
export class MesStages {

  stages: any[] = [];

  constructor(
    private stage: Stage
  ) {}

  ngOnInit(): void {

    this.chargerStages();

  }

  chargerStages() {

    this.stage.mesStages().subscribe({

      next: (data: any) => {

        this.stages = data;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }
}
