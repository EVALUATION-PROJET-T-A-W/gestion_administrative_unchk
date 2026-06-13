import {Component, OnInit} from '@angular/core';
import {CoursService} from '@/app/services/cours';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cours',
  imports: [
    FormsModule
  ],
  templateUrl: './cours.html',
  styleUrl: './cours.css',
})
export class Cours implements OnInit {

  coursList: any[] = [];

  cours: any = {
    id: null,
    titre: '',
    description: '',
    dateCours: '',
    supportCours: '',
    formationId: null
  };

  modeEdition = false;

  constructor(private service: CoursService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.coursList = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.cours.id, this.cours)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.cours)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(c: any) {
    this.cours = { ...c };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer ce cours ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.cours = {
      id: null,
      titre: '',
      description: '',
      dateCours: '',
      supportCours: '',
      formationId: null
    };

    this.modeEdition = false;
  }

}
