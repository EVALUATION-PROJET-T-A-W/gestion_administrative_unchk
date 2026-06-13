import {Component, OnInit} from '@angular/core';
import {RapportService} from '@/app/services/rapport';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-rapport',
  imports: [
    FormsModule
  ],
  templateUrl: './rapport.html',
  styleUrl: './rapport.css',
})
export class Rapport implements OnInit {

  rapports: any[] = [];

  rapport: any = {
    id: null,
    titre: '',
    typeRapport: '',
    dateGeneration: '',
    format: '',
    reunionId: null
  };

  modeEdition = false;

  constructor(private service: RapportService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.rapports = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.rapport.id, this.rapport)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.rapport)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(r: any) {
    this.rapport = { ...r };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce rapport ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.rapport = {
      id: null,
      titre: '',
      typeRapport: '',
      dateGeneration: '',
      format: '',
      reunionId: null
    };

    this.modeEdition = false;
  }
}
