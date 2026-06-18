import { FormationService } from '@/app/services/formationService';
import { ReunionService } from '@/app/services/reunionService';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reunion-administratif',
  imports: [CommonModule, FormsModule],
  templateUrl: './reunion-administratif.html',
  styleUrl: './reunion-administratif.css',
})
export class ReunionAdministratif implements OnInit {

  reunions: any[] = [];
  formations: any[] = [];

  openForm = false;
  openView = false;

  reunion: any = {};
  formationId!: number;

  constructor(
    private reunionService: ReunionService,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {

    this.loadReunions();

    this.formationService.getAll().subscribe({
      next: (res: any) => this.formations = res
    });

  }

  loadReunions() {

    this.reunionService.getAll().subscribe({
      next: (res: any) => this.reunions = res
    });

  }

  nouveau() {

    this.reunion = {
      titre: '',
      typeReunion: '',
      dateReunion: '',
      compteRendu: ''
    };

    this.openForm = true;

  }

  voir(reunion: any) {

    this.reunion = reunion;

    this.openView = true;

  }

  fermerFormulaire() {

    this.openForm = false;

  }

  fermerDetails() {

    this.openView = false;

  }

  enregistrer() {

    this.reunionService
      .ajouter(this.formationId, this.reunion)
      .subscribe(() => {

        this.openForm = false;

        this.loadReunions();

      });

  }

}