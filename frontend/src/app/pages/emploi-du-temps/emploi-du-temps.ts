import {Component, OnInit} from '@angular/core';
import {EmploiDuTempsService} from '@/app/services/emploi-du-temps';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-emploi-du-temps',
  imports: [
    FormsModule
  ],
  templateUrl: './emploi-du-temps.html',
  styleUrl: './emploi-du-temps.css',
})
export class EmploiDuTemps implements OnInit {


  emplois: any[] = [];

  emploi: any = {
    id: null,
    jour: '',
    heureDebut: '',
    heureFin: '',
    salle: '',
    module: '',
    formationId: null
  };

  modeEdition = false;

  constructor(private service: EmploiDuTempsService) {}

  ngOnInit(): void {
    this.lister();
  }

  lister() {
    this.service.getAll().subscribe(data => {
      this.emplois = data;
    });
  }

  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.emploi.id, this.emploi)
        .subscribe(() => {
          this.lister();
          this.resetForm();
        });

    } else {

      this.service.create(this.emploi)
        .subscribe(() => {
          this.lister();
          this.resetForm();
        });

    }
  }

  modifier(emploi: any) {
    this.emploi = { ...emploi };
    this.modeEdition = true;
  }

  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cet emploi du temps ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  resetForm() {
    this.emploi = {
      id: null,
      jour: '',
      heureDebut: '',
      heureFin: '',
      salle: '',
      module: '',
      formationId: null
    };

    this.modeEdition = false;
  }

}
