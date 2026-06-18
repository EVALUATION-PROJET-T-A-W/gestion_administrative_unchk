import { EmploiDuTempsService } from '@/app/services/emploiDuTempsService';
import { FormationService } from '@/app/services/formationService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-emplois-administratif',
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-emplois-administratif.html',
  styleUrl: './liste-emplois-administratif.css',
})
export class ListeEmploisAdministratif implements OnInit {

  emplois: any[] = [];
  formations: any[] = [];

  openForm = false;
  openView = false;
  isEdit = false;

  emploi: any = {};

  constructor(
    private emploiService: EmploiDuTempsService,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {

    this.loadEmplois();

    this.formationService.getAll().subscribe({
      next: (res: any) => this.formations = res
    });

  }

  loadEmplois() {

    this.emploiService.getAll().subscribe({
      next: (res: any) => this.emplois = res
    });

  }

  nouveau() {

    this.isEdit = false;

    this.emploi = {
      jour: '',
      heureDebut: '',
      heureFin: '',
      salle: '',
      module: '',
      formation: null
    };

    this.openForm = true;

  }

  modifier(e: any) {

    this.isEdit = true;

    this.emploi = {...e};

    this.openForm = true;

  }

  voir(e: any) {

    this.emploi = {...e};

    this.openView = true;

  }

  enregistrer() {

    if (this.isEdit) {

      this.emploiService
        .modifier(this.emploi.id, this.emploi)
        .subscribe(() => {

          this.openForm = false;
          this.loadEmplois();

        });

    } else {

      this.emploiService
        .ajouter(this.emploi)
        .subscribe(() => {

          this.openForm = false;
          this.loadEmplois();

        });

    }

  }

  supprimer(id: number) {

    if (confirm('Supprimer cet emploi du temps ?')) {

      this.emploiService
        .supprimer(id)
        .subscribe(() => this.loadEmplois());

    }

  }

}