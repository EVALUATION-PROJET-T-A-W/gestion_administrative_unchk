import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StageService} from '@/app/services/stage';

@Component({
  selector: 'app-stage',
    imports: [
        FormsModule
    ],
  templateUrl: './stage.html',
  styleUrl: './stage.css',
})
export class Stage implements OnInit {

  stages: any[] = [];

  stage: any = {
    id: null,
    entreprise: '',
    dateDebut: '',
    dateFin: '',
    bilan: '',
    statut: '',
    etudiantId: null
  };

  modeEdition = false;

  constructor(private service: StageService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.stages = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.stage.id, this.stage)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.stage)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(s: any) {
    this.stage = { ...s };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce stage ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.stage = {
      id: null,
      entreprise: '',
      dateDebut: '',
      dateFin: '',
      bilan: '',
      statut: '',
      etudiantId: null
    };

    this.modeEdition = false;
  }

}
