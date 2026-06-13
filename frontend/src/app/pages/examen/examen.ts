import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ExamenService } from '@/app/services/examen';

@Component({
  selector: 'app-examen',
  imports: [
    FormsModule
  ],
  templateUrl: './examen.html',
  styleUrl: './examen.css',
})
export class Examen implements OnInit {

  examens: any[] = [];

  examen: any = {
    id: null,
    matiere: '',
    dateExamen: '',
    salle: '',
    formationId: null
  };

  modeEdition = false;

  constructor(private service: ExamenService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.examens = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.examen.id, this.examen)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.examen)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(e: any) {
    this.examen = { ...e };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cet examen ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.examen = {
      id: null,
      matiere: '',
      dateExamen: '',
      salle: '',
      formationId: null
    };

    this.modeEdition = false;
  }


}
