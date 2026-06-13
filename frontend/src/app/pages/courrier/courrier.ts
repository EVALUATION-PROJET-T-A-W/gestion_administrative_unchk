import {Component, OnInit} from '@angular/core';
import {CourrierService} from '@/app/services/courrier';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-courrier',
  imports: [
    FormsModule
  ],
  templateUrl: './courrier.html',
  styleUrl: './courrier.css',
})
export class Courrier implements OnInit {

  courriers: any[] = [];

  courrier: any = {
    id: null,
    typeCourrier: '',
    objet: '',
    dateEnvoi: '',
    expediteur: '',
    destinateur: '',
    administratifId: null
  };

  modeEdition = false;

  constructor(private service: CourrierService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.courriers = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.courrier.id, this.courrier)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.courrier)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(c: any) {
    this.courrier = { ...c };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce courrier ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.courrier = {
      id: null,
      typeCourrier: '',
      objet: '',
      dateEnvoi: '',
      expediteur: '',
      destinateur: '',
      administratifId: null
    };

    this.modeEdition = false;
  }

}
