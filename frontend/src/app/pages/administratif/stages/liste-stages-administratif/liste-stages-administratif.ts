import { EtudiantService } from '@/app/services/etudiantService';
import { StageService } from '@/app/services/stageService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-stages-administratif',
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-stages-administratif.html',
  styleUrl: './liste-stages-administratif.css',
})
export class ListeStagesAdministratif implements OnInit {

    stages: any[] = [];
    etudiants: any[] = [];
  
    openForm = false;
    openView = false;
    isEdit = false;
  
    stage: any = {};
  
    constructor(
      private stageService: StageService,
      private etudiantService: EtudiantService
    ) {}
  
    ngOnInit(): void {
  
      this.loadStages();
  
      this.etudiantService.getAll().subscribe({
        next: (res: any) => this.etudiants = res
      });
  
    }
  
    loadStages() {
  
      this.stageService.getAll().subscribe({
        next: (res: any) => this.stages = res
      });
  
    }
  
    nouveau() {
  
      this.isEdit = false;
  
      this.stage = {
        entreprise: '',
        dateDebut: '',
        dateFin: '',
        bilan: '',
        statut:'',
        etudiant: null
      };
  
      this.openForm = true;
  
    }
  
    modifier(stage: any) {
  
      this.isEdit = true;
  
      this.stage = { ...stage };
  
      this.openForm = true;
  
    }
  
    voir(stage: any) {
  
      this.stage = { ...stage };
  
      this.openView = true;
  
    }
  
    enregistrer() {
  
      if (this.isEdit) {
  
        this.stageService
          .modifier(this.stage.id, this.stage)
          .subscribe(() => {
  
            this.openForm = false;
            this.loadStages();
  
          });
  
      } else {
  
        this.stageService
          .ajouter(this.stage)
          .subscribe(() => {
  
            this.openForm = false;
            this.loadStages();
  
          });
  
      }
  
    }
  
    supprimer(id: number) {
  
      if (confirm("Supprimer ce stage ?")) {
  
        this.stageService
          .supprimer(id)
          .subscribe(() => {
  
            this.loadStages();
  
          });
  
      }
  
    }
    fermerFormulaire() {

      this.openForm = false;
    
    }
    fermerDetails() {

      this.openView = false;
    
    }
  }

